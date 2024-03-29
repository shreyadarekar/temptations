// backend/routes/api/index.js
const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const unitsRouter = require("./units.js");
const ingredientsRouter = require("./ingredients.js");
const recipesRouter = require("./recipes.js");
const reviewsRouter = require("./reviews.js");
const cookbooksRouter = require("./cookbooks.js");
const { restoreUser } = require("../../utils/auth.js");

// Connect restoreUser middleware to the API router
// If current user session is valid, set req.user to the user in the database
// If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/units", unitsRouter);
router.use("/ingredients", ingredientsRouter);
router.use("/recipes", recipesRouter);
router.use("/reviews", reviewsRouter);
router.use("/cookbooks", cookbooksRouter);

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
