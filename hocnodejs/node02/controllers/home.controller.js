const moment = require("moment");
const { object, string } = require("yup");
const courseModel = require("../models/course.model");
module.exports = {
  index: async (req, res, next) => {
    //Đọc dữ liệu từ request
    const { keyword, status } = req.query;
    //Đọc dữ liệu từ bảng courses
    const courses = await courseModel.all(keyword, status);
    // const debug = await courseModel.all(keyword, status).describe();
    // console.log(debug);
    const msg = req.flash("msg");
    res.render("home/index", { courses, moment, msg });
  },

  add: (req, res) => {
    // const errors = req.flash("errors");
    res.render("home/add", { req });
  },

  handleAdd: async (req, res) => {
    /*
    Validate:
    - Tên: Bắt buộc, không bị trùng
    - Giá: Bắt buộc, số
    Insert Database
    Redirect kèm thông báo
    */
    const body = await req.validate(req.body, {
      name: string()
        .required("Tên khóa học bắt buộc phải nhập")
        .test("check-unique", "Tên khóa học đã tồn tại", async (value) => {
          return await courseModel.courseUnique(value);
        }),
      price: string()
        .required("Giá khóa học bắt buộc phải nhập")
        .test("check-number", "Giá khóa học phải là số", (value) => {
          value = +value;
          if (!isNaN(value)) {
            return true;
          }
          return false;
        }),
    });
    if (body) {
      await courseModel.create(body.name, +body.price, body.status);
      req.flash("msg", "Thêm khóa học thành công");
      return res.redirect("/");
    }
    return res.redirect("/add");
  },
};
