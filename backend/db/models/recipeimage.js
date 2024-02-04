"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RecipeImage extends Model {
    static associate(models) {
      // define association here
      RecipeImage.belongsTo(models.Recipe, { foreignKey: "recipeId" });
    }
  }
  RecipeImage.init(
    {
      recipeId: { allowNull: false, type: DataTypes.INTEGER },
      url: { allowNull: false, type: DataTypes.TEXT },
      preview: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "RecipeImage",
    }
  );
  return RecipeImage;
};
