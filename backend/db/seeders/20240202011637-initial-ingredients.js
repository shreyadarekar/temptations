"use strict";

const { Ingredient } = require("../models");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const ingredients = [
  "linguine pasta",
  "butter",
  "extra-virgin olive oil",
  "shallots",
  "garlic",
  "red pepper flakes",
  "shrimp",
  "kosher salt",
  "dry white wine",
  "lemon",
  "parsley",
  "chicken",
  "onion",
  "yogurt",
  "salt",
  "garam masala",
  "ginger",
  "cayenne pepper",
  "cilantro",
  "sushi rice",
  "water",
  "dried kelp",
  "rice wine",
  "sugar",
  "nori seaweed sheets",
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Ingredient.bulkCreate(
      ingredients.map((i) => ({ name: i })),
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Ingredients";
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(
      options,
      { name: { [Op.in]: ingredients } },
      {}
    );
  },
};
