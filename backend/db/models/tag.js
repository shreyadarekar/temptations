"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      // define association here
      Tag.belongsTo(models.Recipe, { foreignKey: "recipeId" });
    }
  }
  Tag.init(
    {
      recipeId: { allowNull: false, type: DataTypes.INTEGER },
      title: { allowNull: false, type: DataTypes.STRING(100) },
    },
    {
      sequelize,
      modelName: "Tag",
    }
  );
  return Tag;
};
