"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.belongsToMany(models.User, {
        foreignKey: "role_id",
        through: "users_roles",
        as: "users",
      });
      Role.belongsToMany(models.Permission, {
        foreignKey: "role_id",
        through: "roles_permissions",
        as: "permissions",
      });
    }
  }
  Role.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
      },
    },
    {
      sequelize,
      modelName: "Role",
      tableName: "roles",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );
  return Role;
};
