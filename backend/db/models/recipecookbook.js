"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RecipeCookbook extends Model {
    static associate(models) {
      // define association here
      RecipeCookbook.belongsTo(models.Cookbook, { foreignKey: "cookbookId" });
      RecipeCookbook.belongsTo(models.Recipe, { foreignKey: "recipeId" });
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
