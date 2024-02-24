"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      execute_number: {
        type: DataTypes.INTEGER,
      },
      content: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Job",
      tableName: "jobs",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );
  return Job;
};
