"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Recipes",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: "Users" },
          onDelete: "CASCADE",
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING(100),
        },
        description: {
          allowNull: false,
          type: Sequelize.STRING(256),
        },
        prepTime: {
          allowNull: false,
          type: Sequelize.DECIMAL,
        },
        cookTime: {
          allowNull: false,
          type: Sequelize.DECIMAL,
        },
        servings: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        directions: {
          allowNull: false,
          type: Sequelize.TEXT("long"),
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
    options.tableName = "Recipes";
    await queryInterface.dropTable(options);
  },
};
