"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.hasOne(models.Phone, {
      //   foreignKey: "user_id",
      //   as: "phone",
      // });
      // User.hasMany(models.Post, {
      //   foreignKey: "user_id",
      //   as: "posts",
      // });
      // User.belongsToMany(models.Course, {
      //   foreignKey: "user_id",
      //   through: "users_courses",
      //   as: "courses",
      // });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER, //Kiểu dữ liệu
        primaryKey: true,
        autoIncrement: true,
      },
      fullname: DataTypes.STRING(30),
      email: DataTypes.STRING(100),
      password: DataTypes.STRING(100),
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users", //Tên bảng trong Database
      createdAt: "created_at",
      updatedAt: "updated_at",
      //: "deleted_at",
      //paranoid: true,
      // timestamps: false
    },
  );
  return User;
};
