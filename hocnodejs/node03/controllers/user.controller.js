const moment = require("moment");
const model = require("../models/index");
const User = model.User;
const { Op } = require("sequelize");
module.exports = {
  index: async (req, res) => {
    const { status, keyword } = req.query;
    const filters = {};
    if (status === "active" || status === "inactive") {
      filters.status = status === "active";
    }
    if (keyword) {
      //   filters.email = {
      //     [Op.iLike]: `%${keyword}%`,
      //   };
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
    const { rows: users, count } = await User.findAndCountAll({
      order: [
        ["id", "DESC"],
        ["created_at", "ASC"],
      ],
      where: filters,
      limit,
      offset,
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
    res.render("users/index", { users, moment, page, totalPage });
  },
  add: (req, res) => {
    res.render("users/add");
  },
  handleAdd: async (req, res) => {
    const body = req.body;
    body.status = +body.status === 1;
    console.log(body);
    const user = await User.create(body);
    return res.redirect("/users");
  },
  edit: async (req, res, next) => {
    const { id } = req.params;
    // const user = await User.findByPk(id);
    try {
      const user = await User.findOne({ where: { id: id } });
      if (!user) {
        throw new Error("Người dùng không tồn tại");
      }
      res.render("users/edit", { user });
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
