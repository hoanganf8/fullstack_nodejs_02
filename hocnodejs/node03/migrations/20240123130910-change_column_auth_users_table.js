"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("users", "password", {
      type: Sequelize.STRING(100),
      allowNull: true,
    });
    await queryInterface.removeConstraint("users", "users_email_key");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("users", "password", {
      type: Sequelize.STRING(100),
      allowNull: false,
    });
    await queryInterface.changeColumn("users", "email", {
      type: Sequelize.STRING(100),
      unique: true,
    });
  },
};
