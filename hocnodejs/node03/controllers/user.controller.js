const moment = require("moment");
const model = require("../models/index");
const User = model.User;
const Phone = model.Phone;
const Post = model.Post;
const Course = model.Course;
const { Op } = require("sequelize");
module.exports = {
  index: async (req, res) => {
    const { status, keyword } = req.query;
    const filters = {};
    if (status === "active" || status === "inactive") {
      filters.status = status === "active";
    }
    if (keyword) {
      filters[Op.or] = [
        {
          name: {
            [Op.iLike]: `%${keyword}%`,
          },
        },
        {
          email: {
            [Op.iLike]: `%${keyword}%`,
          },
        },
      ];
    }
    let { page = 1 } = req.query;
    if (!+page) {
      page = 1;
    }
    const limit = 3;
    const offset = (page - 1) * limit;
    let { rows: users, count } = await User.findAndCountAll({
      order: [
        ["id", "DESC"],
        ["created_at", "ASC"],
      ],
      where: filters,
      limit,
      offset,
      include: {
        model: Phone,
        as: "phone",
      },
    });
    const totalPage = Math.ceil(count / limit);

    /*
    - Lấy được page hiện tại: req.query
    - Xác định limit: config
    - Tính offset: (page - 1) * limit
    - Tính tổng số bản ghi
    - Tính tổng số trang: Tổng số bản ghi / limit --> Làm tròn lên
    - Hiển thị số trang: Sử dụng paginate của bootstrap
    */
    // for (let user of users) {
    //   const phone = await user.getPhone();
    //   user.dienthoai = phone?.phone;
    // }

    res.render("users/index", { users, moment, page, totalPage });
  },
  add: async (req, res) => {
    //Lấy tất cả khóa học
    const courses = await Course.findAll({
      order: [["name", "asc"]],
    });
    res.render("users/add", { courses });
  },
  handleAdd: async (req, res) => {
    const body = req.body;
    body.status = +body.status === 1;
    const courses = Array.from(body.courses);
    const user = await User.create(body);
    if (user && courses.length) {
      for (let courseId of courses) {
        const course = await Course.findByPk(courseId);
        //Trả về 1 instance của khóa học có id là courseId
        if (course) {
          await user.addCourse(course);
        }
      }
    }

    return res.redirect("/users");
  },
  edit: async (req, res, next) => {
    const { id } = req.params;
    // const user = await User.findByPk(id);
    try {
      const user = await User.findOne({
        where: { id: id },
        include: [
          {
            model: Post,
            as: "posts",
          },
          {
            model: Course,
            as: "courses",
          },
        ],
      });

      if (!user) {
        throw new Error("Người dùng không tồn tại");
      }

      //Lấy tất cả khóa học
      const courses = await Course.findAll({
        order: [["name", "asc"]],
      });

      res.render("users/edit", { user, courses });
    } catch (e) {
      return next(e);
    }
  },
  handleEdit: async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    body.status = +body.status === 1;
    const status = await User.update(body, {
      where: { id },
    });

    //Cập nhật bảng trung gian
    const courses = Array.from(body.courses);
    //Sử dụng hàm user.setCourses(array)
    //Cần có: 1 mảng chứa instance của từng khóa học
    if (courses.length) {
      const courseList = await Promise.all(
        courses.map((courseId) => Course.findByPk(courseId)),
      );
      const user = await User.findByPk(id);
      await user.setCourses(courseList);
    }

    return res.redirect(`/users/edit/${id}`);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const status = await User.destroy({
      where: { id },
      force: true,
    });
    return res.redirect(`/users`);
  },
};
