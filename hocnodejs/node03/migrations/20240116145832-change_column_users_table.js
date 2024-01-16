"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("users", "name", {
      type: Sequelize.STRING(50),
      allowNull: true,
    });
    await queryInterface.renameColumn("users", "name", "fullname");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("users", "fullname", "name");
    await queryInterface.changeColumn("users", "name", {
      type: Sequelize.STRING(30),
      allowNull: false,
    });
  },
};
