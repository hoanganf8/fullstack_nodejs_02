//Tư duy xây dựng model
/*
- 1 model tương ứng với 1 table
- 1 controller có thể có nhiều model
*/
const sql = require("../utils/db");
module.exports = {
  all: (keyword, status) => {
    // const filter = keyword
    //   ? sql`WHERE LOWER(name) LIKE ${"%" + keyword + "%"}`
    //   : sql``;
    let filter = sql`WHERE name IS NOT NULL`;
    if (status === "active" || status === "inactive") {
      filter = sql`${filter} AND status=${status === "active" ? true : false}`;
    }
    if (keyword) {
      filter = sql`${filter} AND LOWER(name) LIKE ${"%" + keyword + "%"}`;
    }

    return sql`SELECT * FROM courses ${filter} ORDER BY id DESC`;
  },
  courseUnique: async (name) => {
    const result = await sql`SELECT id FROM courses WHERE name=${name.trim()}`;
    if (result.length) {
      return false;
    }
    return true;
  },
  get: (id) => {},
  create: (name, price, status) => {
    return sql`INSERT INTO courses(name, price, status) VALUES(${name}, ${price}, ${
      status === "active" ? true : false
    })`;
  },
  update: (data, id) => {},
  destroy: (id) => {},
};

/*
Không filter
SELECT * FROM courses ORDER BY id DESC

Nếu muốn filter theo status
SELECT * FROM courses WHERE status=${status} ORDER BY id DESC

Nếu muốn filter theo keyword
SELECT * FROM courses WHERE name LIKE ${'%' + keyword + '%'} ORDER BY id DESC

Nếu muốn filter theo cả status và keyword
SELECT * FROM courses WHERE  status=${status} AND name LIKE ${'%' + keyword + '%'} ORDER BY id DESC
*/
