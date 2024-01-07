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
  edit: async (req, res, next) => {
    const { id } = req.params;
    req.session.currentId = id;
    //Truy vấn thông tin khóa học khớp với id
    let course;
    try {
      course = await courseModel.find(id);
      if (!course.length) {
        throw new Error("Khóa học không tồn tại");
      }
    } catch (e) {
      return next(e);
    }

    course[0].status = course[0].status ? "active" : "inactive"; //Trả về giao diện để tự động selected

    req.old = course[0];
    const msg = req.flash("msg");
    res.render("home/edit", { req, msg });
  },
  handleEdit: async (req, res, next) => {
    const { id } = req.params;
    if (+req.session.currentId !== +id) {
      next(new Error("Come back"));
    }
    const body = await req.validate(req.body, {
      name: string()
        .required("Tên khóa học bắt buộc phải nhập")
        .test("check-unique", "Tên khóa học đã tồn tại", async (value) => {
          return await courseModel.courseUnique(value, id);
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
      await courseModel.update(body, id);
      req.flash("msg", "Cập nhật khóa học thành công");
    }

    return res.redirect("/edit/" + id);
  },
  delete: async (req, res, next) => {
    const { id } = req.params;
    try {
      await courseModel.delete(id);
      req.flash("msg", "Xóa thành công");
      return res.redirect("/");
    } catch (e) {
      return next(e);
    }
  },
};
