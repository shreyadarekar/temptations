"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Unit extends Model {
    static associate(models) {
      // define association here
    }
  }
  Unit.init(
    {
      unit: { allowNull: false, type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "Unit",
    }
  );
  return Unit;
};
