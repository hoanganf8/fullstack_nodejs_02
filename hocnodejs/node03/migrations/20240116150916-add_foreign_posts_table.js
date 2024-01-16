"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("posts", {
      type: "foreign key",
      fields: ["category_id"],
      name: "posts_category_id_foreign",
      references: {
        table: "categories",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("posts_category_id_foreign");
  },
};
