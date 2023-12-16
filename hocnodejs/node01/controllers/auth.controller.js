import { getError } from "../utils/validate.js";
const authController = {
  login: (req, res) => {
    // return res.send("<h1>Đăng nhập</h1>");
    const errors = req.flash("errors");

    res.render("auth/login", {
      layout: "auth/layout",
      errors,
      getError,
    });
  },

  handleLogin: (req, res) => {
    const { email, password } = req.body;
    const errors = {};
    if (!email) {
      errors.email = "Email không được để trống";
    }
    if (!password) {
      errors.password = "Mật khẩu không được để trống";
    }
    if (Object.keys(errors).length) {
      req.flash("errors", errors);
    }
    return res.redirect("/dang-nhap");
    // res.send("Submit");
    // res.json(data);
  },
};

export default authController;

/*
Buổi sau: 
- session
- flash session
- validate
- upload file
- database
*/
