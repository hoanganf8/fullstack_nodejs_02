const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User, BlacklistToken } = require("../../../models/index");
module.exports = {
  login: async (req, res) => {
    const response = {};
    //Validate
    const { email, password } = req.body;
    if (!email || !password) {
      Object.assign(response, {
        status: 400,
        message: "Bad Request",
      });
    } else {
      //Xác thực:
      // -- Lấy user từ email
      const user = await User.findOne({ where: { email } });
      if (!user) {
        Object.assign(response, {
          status: 400,
          message: "Bad Request",
        });
      } else {
        // -- So sánh hash với password request
        const result = bcrypt.compareSync(password, user.password);
        if (!result) {
          Object.assign(response, {
            status: 400,
            message: "Bad Request",
          });
        } else {
          // -- Lưu thông tin user vào jwt
          const { JWT_SECRET, JWT_EXPIRE, JWT_REFRESH_EXPIRE } = process.env;
          const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
            expiresIn: JWT_EXPIRE,
          });
          const refreshToken = jwt.sign(
            { data: new Date().getTime() + Math.random() },
            JWT_SECRET,
            {
              expiresIn: JWT_REFRESH_EXPIRE,
            },
          );
          //Lưu refresh vào database
          await User.update(
            {
              refresh_token: refreshToken,
            },
            {
              where: { id: user.id },
            },
          );
          Object.assign(response, {
            status: 200,
            message: "Success",
            access_token: accessToken,
            refresh_token: refreshToken,
          });
        }
      }
    }
    res.status(response.status).json(response);
  },
  profile: async (req, res) => {
    const response = {
      status: 200,
      message: "Success",
      data: req.user.dataValues,
    };

    res.status(response.status).json(response);
  },
  logout: async (req, res) => {
    //Đưa access token vào blacklist --> Cấm sử dụng các token chưa hết hạn nhưng user không còn dùng đến nữa
    /*
    3 nơi lưu blacklist
    - Database
    - File
    - Redis

    Lấy được token và expire của token
    */
    const { accessToken, expired } = req.user;
    await BlacklistToken.findOrCreate({
      where: { token: accessToken },
      defaults: {
        token: accessToken,
        expired,
      },
    });
    res.status(200).json({
      status: 200,
      message: "Success",
    });
  },
  refresh: async (req, res) => {
    const { refresh_token: refreshToken } = req.body;
    const response = {};
    if (!refreshToken) {
      Object.assign(response, {
        status: 401,
        message: "Unauthorized",
      });
    } else {
      try {
        const { JWT_SECRET, JWT_EXPIRE } = process.env;
        jwt.verify(refreshToken, JWT_SECRET);
        const user = await User.findOne({
          where: {
            refresh_token: refreshToken,
          },
        });
        if (!user) {
          throw new Error("User not exist");
        }
        //Tạo access token mới
        const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
          expiresIn: JWT_EXPIRE,
        });
        Object.assign(response, {
          status: 200,
          message: "Success",
          access_token: accessToken,
          refresh_token: refreshToken,
        });
      } catch {
        Object.assign(response, {
          status: 401,
          message: "Unauthorized",
        });
      }
    }
    res.status(response.status).json(response);
  },
};
