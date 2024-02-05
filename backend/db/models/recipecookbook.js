"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RecipeCookbook extends Model {
    static associate(models) {
      // define association here
      RecipeCookbook.hasMany(models.Cookbook, { foreignKey: "id" });
      RecipeCookbook.hasMany(models.Recipe, { foreignKey: "id" });
    }
  }
  RecipeCookbook.init(
    {
      recipeId: { allowNull: false, type: DataTypes.INTEGER },
      cookbookId: { allowNull: false, type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "RecipeCookbook",
    }
  );
  return RecipeCookbook;
};
