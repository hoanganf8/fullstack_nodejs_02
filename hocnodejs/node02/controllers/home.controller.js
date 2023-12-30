const moment = require("moment");
const courseModel = require("../models/course.model");
module.exports = {
  index: async (req, res, next) => {
    //Đọc dữ liệu từ request
    const { keyword } = req.query;
    //Đọc dữ liệu từ bảng courses
    const courses = await courseModel.all(keyword);
    res.render("home/index", { courses, moment });
  },
};
