const { Op } = require("sequelize");
const { object, string } = require("yup");
const bcrypt = require("bcrypt");
const { User } = require("../../../models/index");
module.exports = {
  index: async (req, res) => {
    const {
      order = "asc",
      sort = "id",
      status,
      q,
      limit,
      page = 1,
    } = req.query;
    const response = {};
    try {
      const filter = {};
      if (status === "true" || status === "false") {
        filter.status = status === "true";
      }
      if (q) {
        filter[Op.or] = {
          fullname: {
            [Op.iLike]: `%${q.trim()}%`,
          },
          email: {
            [Op.iLike]: `%${q.trim()}%`,
          },
        };
      }
      const options = {
        order: [[sort, order]],
        attributes: { exclude: "password" },
        where: filter,
      };
      if (limit && Number.isInteger(+limit)) {
        const offset = (page - 1) * limit;
        options.limit = limit;
        options.offset = offset;
      }
      const { count, rows: users } = await User.findAndCountAll(options);
      Object.assign(response, {
        status: 200,
        message: "Success",
        data: users,
        count,
      });
    } catch {
      Object.assign(response, { status: 500, message: "Server Error" });
    }

    res.status(response.status).json(response);
  },
  find: async (req, res) => {
    const { id } = req.params;
    const response = {};
    try {
      const user = await User.findOne(
        {
          where: { id },
        },
        {
          attributes: { exclude: "password" },
        },
      );
      if (!user) {
        const error = new Error("Not Found");
        error.status = 404;
        throw error;
      }
      Object.assign(response, {
        status: 200,
        message: "Success",
        data: user,
      });
    } catch (e) {
      if (e.status !== 404) {
        e.message = "Server Error";
        e.status = 500;
      }
      Object.assign(response, {
        status: e.status,
        message: e.message,
      });
    }
    res.status(response.status).json(response);
  },
  store: async (req, res) => {
    const response = {};
    //Validate
    const schema = object({
      fullname: string().required("Tên bắt buộc phải nhập"),
      email: string()
        .required("Email bắt buộc phải nhập")
        .email("Email không đúng định dạng"),
      password: string().required("Mật khẩu bắt buộc phải nhập"),
      status: string().test(
        "check-boolean",
        "Trạng thái không hợp lệ",
        (value) => {
          return value === "true" || value === "false";
        },
      ),
    });
    try {
      const body = await schema.validate(req.body, {
        abortEarly: false,
      });
      body.password = bcrypt.hashSync(body.password, 10);
      const user = await User.create(body);
      Object.assign(response, {
        status: 200,
        message: "Success",
        data: user,
      });
      delete user.dataValues.password; //Xóa field password khỏi response
    } catch (e) {
      const errors = Object.fromEntries(
        e.inner.map((item) => [item.path, item.message]),
      );
      Object.assign(response, {
        status: 400,
        message: "Bad Request",
        errors,
      });
    }
    res.status(response.status).json(response);
  },
  update: async (req, res) => {
    //Validate theo nguyên tắc: Có dữ liệu --> Validate
    /*
    - Nếu fullname được gửi lên --> Check độ dài
    - Nếu email được gửi lên --> Check định dạng email, check trùng lặp
    - Nếu password được gửi lên --> Check độ dài, độ mạnh yếu
    - Nếu status được gửi lên --> Check tính hợp lệ (true, false)
    */
    const { id } = req.params;
    const method = req.method;
    const response = {};
    //Validate
    const rules = {};
    if (req.body.fullname) {
      rules.fullname = string().min(4, "Tên phải từ 4 ký tự");
    }
    if (req.body.email) {
      rules.email = string().email("Email không đúng định dạng");
    }
    if (req.body.password) {
      rules.password = string().min(6, "Tên phải từ 6 ký tự");
    }
    if (req.body.status) {
      rules.status = string().test(
        "check-boolean",
        "Trạng thái không hợp lệ",
        (value) => {
          return value === true || value === false;
        },
      );
    }
    const schema = object(rules);
    try {
      let body = await schema.validate(req.body, {
        abortEarly: false,
      });
      if (body.password) {
        body.password = bcrypt.hashSync(body.password, 10);
      }
      if (method === "PUT") {
        body = Object.assign(
          {
            fullname: null,
            email: null,
            password: null,
            status: null,
          },
          body,
        );
      }
      await User.update(body, {
        where: { id },
      });
      const user = await User.findByPk(id, {
        attributes: { exclude: "password" },
      });
      Object.assign(response, {
        status: 200,
        message: "Success",
        data: user,
      });
    } catch (e) {
      const errors = Object.fromEntries(
        e.inner.map((item) => [item.path, item.message]),
      );
      Object.assign(response, {
        status: 400,
        message: "Bad Request",
        errors,
      });
    }
    res.status(response.status).json(response);
  },
};
