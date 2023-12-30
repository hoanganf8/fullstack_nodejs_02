//Tư duy xây dựng model
/*
- 1 model tương ứng với 1 table
- 1 controller có thể có nhiều model
*/
const sql = require("../utils/db");
module.exports = {
  all: (keyword) => {
    const filter = keyword
      ? sql`WHERE LOWER(name) LIKE ${"%" + keyword + "%"}`
      : sql``;
    return sql`SELECT * FROM courses ${filter} ORDER BY id DESC`;
  },
  get: (id) => {},
  create: (data) => {},
  update: (data, id) => {},
  destroy: (id) => {},
};
