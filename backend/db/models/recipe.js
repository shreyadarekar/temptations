"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate(models) {
      Recipe.belongsTo(models.User, { foreignKey: "userId" });
      Recipe.hasMany(models.RecipeImage, {
        foreignKey: "recipeId",
        onDelete: "CASCADE",
        hooks: true,
      });
      Recipe.hasMany(models.RecipeIngredient, {
        foreignKey: "recipeId",
        onDelete: "CASCADE",
        hooks: true,
      });
      Recipe.hasMany(models.Review, {
        foreignKey: "recipeId",
        onDelete: "CASCADE",
        hooks: true,
      });
      Recipe.hasMany(models.Tag, {
        foreignKey: "recipeId",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  Recipe.init(
    {
      userId: { allowNull: false, type: DataTypes.INTEGER },
      name: { allowNull: false, type: DataTypes.STRING(100) },
      description: { allowNull: false, type: DataTypes.STRING(256) },
      prepTime: { allowNull: false, type: DataTypes.DECIMAL },
      cookTime: { allowNull: false, type: DataTypes.DECIMAL },
      servings: { allowNull: false, type: DataTypes.INTEGER },
      directions: { allowNull: false, type: DataTypes.TEXT },
    },
    {
      sequelize,
      modelName: "Recipe",
    }
  );
  return Recipe;
};
