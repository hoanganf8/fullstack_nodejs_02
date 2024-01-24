"use strict";
const bcrypt = require("bcrypt");
const { faker } = require("@faker-js/faker");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        fullname: "Hoàng An",
        email: "hoangan.web@gmail.com",
        password: bcrypt.hashSync("123456", bcrypt.genSaltSync(10)),
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    // for (let i = 0; i < 50; i++) {
    //   const salt = bcrypt.genSaltSync(10);
    //   users.push({
    //     fullname: faker.person.fullName(),
    //     email: faker.internet.email(),
    //     password: bcrypt.hashSync("123456", salt),
    //     status: faker.datatype.boolean(),
    //     // phone: faker.phone.number(),
    //     address: faker.location.streetAddress(),
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   });
    // }

    await queryInterface.bulkInsert("users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
