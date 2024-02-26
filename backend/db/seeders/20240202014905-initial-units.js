"use strict";

const { Unit } = require("../models");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const units = [
  "",
  "cup",
  "tsp",
  "tbsp",
  "pinch",
  "ml",
  "gm",
  "ounce",
  "clove",
  "pound",
  "slices",
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Unit.bulkCreate(
      units.map((i) => ({ unit: i })),
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Units";
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, { unit: { [Op.in]: units } }, {});
  },
};
