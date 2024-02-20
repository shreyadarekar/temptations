const express = require("express");
const { Unit } = require("../../db/models");

const router = express.Router();

// get all units
router.get("/", async (_req, res) => {
  const units = await Unit.findAll();
  return res.json(units);
});

module.exports = router;
