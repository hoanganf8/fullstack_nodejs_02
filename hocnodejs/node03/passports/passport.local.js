const { User } = require("../models/index");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
module.exports = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    const user = await User.findOne({
      where: { email },
    });
    if (!user) {
      return done(null, false, {
        message: "Tài khoản không tồn tại",
      });
    }
    const { password: passwordHash } = user;
    const result = bcrypt.compareSync(password, passwordHash);
    if (!result) {
      return done(null, false, {
        message: "Mật khẩu không chính xác",
      });
    }
    done(null, user);
  },
);
