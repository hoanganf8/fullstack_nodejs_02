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
    const users = await User.findAll({
      order: [
        ["id", "DESC"],
        ["created_at", "ASC"],
      ],
      where: filters,
    });
    res.render("users/index", { users, moment });
  },
};
