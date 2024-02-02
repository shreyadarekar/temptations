"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    static associate(models) {
      // define association here
    }
  }
  Ingredient.init(
    {
      name: { allowNull: false, type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "Ingredient",
    }
  );
  return Ingredient;
};
