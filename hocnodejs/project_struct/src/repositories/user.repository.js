const Repository = require("../../core/repository");
const { User } = require("../models/index");
module.exports = class extends Repository {
  getModel() {
    return User;
  }

  getLastesUser() {
    return this.model.findAll({
      order: [["id", "desc"]],
      limit: 5,
    });
  }
};
