"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RecipeIngredient extends Model {
    static associate(models) {
      // define association here
      RecipeIngredient.belongsTo(models.Recipe, { foreignKey: "recipeId" });
      RecipeIngredient.belongsTo(models.Ingredient, {
        foreignKey: "ingredientId",
      });
      RecipeIngredient.belongsTo(models.Unit, { foreignKey: "unitId" });
    }
  }
  RecipeIngredient.init(
    {
      recipeId: { allowNull: false, type: DataTypes.INTEGER },
      ingredientId: { allowNull: false, type: DataTypes.INTEGER },
      unitId: { allowNull: false, type: DataTypes.INTEGER },
      amount: { allowNull: false, type: DataTypes.DECIMAL },
    },
    {
      sequelize,
      modelName: "RecipeIngredient",
    }
  );
  return RecipeIngredient;
};
