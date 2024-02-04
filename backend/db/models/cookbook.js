"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cookbook extends Model {
    static associate(models) {
      Cookbook.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Cookbook.init(
    {
      userId: { allowNull: false, type: DataTypes.INTEGER },
      title: { allowNull: false, type: DataTypes.STRING(100) },
    },
    {
      sequelize,
      modelName: "Cookbook",
    }
  );
  return Cookbook;
};
