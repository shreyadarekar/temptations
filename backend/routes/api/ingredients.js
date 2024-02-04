const express = require("express");
const { Ingredient } = require("../../db/models");

const router = express.Router();

// get all ingredients
router.get("/", async (_req, res) => {
  const ingredients = await Ingredient.findAll();
  return res.json(ingredients);
});

module.exports = router;
