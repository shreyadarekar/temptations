"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "RecipeIngredients",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        recipeId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: "Recipes" },
          onDelete: "CASCADE",
        },
        ingredientId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: "Ingredients" },
          onDelete: "CASCADE",
        },
        unitId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: "Units" },
          onDelete: "CASCADE",
        },
        amount: {
          allowNull: false,
          type: Sequelize.DECIMAL,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      options
    );
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "RecipeIngredients";
    await queryInterface.dropTable(options);
  },
};
