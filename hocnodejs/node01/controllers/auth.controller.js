import { object, string } from "yup";
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

  handleLogin: async (req, res) => {
    // const { email, password } = req.body;
    const schema = object({
      email: string()
        .required("Email bắt buộc phải nhập")
        .email("Email không đúng định dạng"),
      password: string()
        //  .required("Mật khẩu bắt buộc phải nhập")
        .min(6, "Mật khẩu phải từ 6 ký tự trở lên"),
    });
    try {
      const data = await schema.validate(req.body, {
        abortEarly: false,
      });
    } catch (e) {
      let errors = e.inner.map(({ path, message }) => [path, message]);
      errors = Object.fromEntries(errors);
      req.flash("errors", errors);
    }
    // const errors = {};
    // if (!email) {
    //   errors.email = "Email không được để trống";
    // }
    // if (!password) {
    //   errors.password = "Mật khẩu không được để trống";
    // }
    // if (Object.keys(errors).length) {
    //   req.flash("errors", errors);
    // }
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
