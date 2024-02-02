"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, { foreignKey: "userId" });
      Review.belongsTo(models.Recipe, { foreignKey: "recipeId" });
      Review.hasMany(models.ReviewImage, {
        foreignKey: "reviewId",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  Review.init(
    {
      userId: { allowNull: false, type: DataTypes.INTEGER },
      recipeId: { allowNull: false, type: DataTypes.INTEGER },
      content: { allowNull: false, type: DataTypes.STRING(256) },
      stars: { allowNull: false, type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
