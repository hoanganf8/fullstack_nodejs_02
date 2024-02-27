//Base repository
module.exports = class {
  constructor() {
    this.model = this.getModel();
  }
  create(data = {}) {
    return this.model.create(data);
  }
  findOne(attributes = {}) {}
  findByPk(id) {}
  findAll(options = {}) {}
  update(data = {}, condition = {}) {}
  delete(condition = {}) {}
};
