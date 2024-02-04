const express = require("express");
const { check } = require("express-validator");
const { requireAuth, forbiddenError } = require("../../utils/auth");
const {
  handleValidationErrors,
  validateReview,
} = require("../../utils/validation");
const {
  Recipe,
  RecipeImage,
  Review,
  Tag,
  User,
  RecipeIngredient,
  Ingredient,
  Unit,
} = require("../../db/models");

const router = express.Router();

const getAvgRating = (Reviews) => {
  if (!Reviews.length) return 0;

  const sumStars = Reviews.reduce((sum, rev) => sum + rev.stars, 0);
  return Number((sumStars / Reviews.length).toFixed(1));
};

const getFullRecipe = (recipeId) =>
  Recipe.findByPk(recipeId, {
    include: [
      { model: User, attributes: ["username"] },
      { model: RecipeImage, attributes: ["url", "preview"] },
      {
        model: Review,
        attributes: ["stars", "content"],
        include: [{ model: User, attributes: ["id", "username"] }],
      },
      {
        model: RecipeIngredient,
        include: [{ model: Unit }, { model: Ingredient }],
      },
      { model: Tag, attributes: ["title"] },
    ],
  });

// recipeNotFound
const recipeNotFound = function (_req, _res, next) {
  const err = new Error("Recipe couldn't be found");
  err.title = "Couldn't find a Recipe with the specified id";
  err.errors = { message: "Recipe couldn't be found" };
  err.status = 404;
  return next(err);
};

const validateRecipe = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Name is required")
    .isLength({ min: 1, max: 100 })
    .withMessage("Name must be less than 100 characters"),
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("Description is required")
    .isLength({ min: 1, max: 256 })
    .withMessage("Description must be less than 256 characters"),
  check("prepTime")
    .exists({ checkFalsy: true })
    .withMessage("Prep-time is required")
    .isFloat({ min: 0 })
    .withMessage("Prep-time cannot be negative"),
  check("cookTime")
    .exists({ checkFalsy: true })
    .withMessage("Cook-time is required")
    .isFloat({ min: 0 })
    .withMessage("Cook-time cannot be negative"),
  check("servings")
    .exists({ checkFalsy: true })
    .withMessage("Servings is required")
    .isFloat({ min: 1 })
    .withMessage("Servings should be greater than or equal to 1"),
  check("directions")
    .exists({ checkFalsy: true })
    .withMessage("Directions is required"),
  handleValidationErrors,
];

// add a review for a recipe
router.post(
  "/:recipeId/reviews",
  [requireAuth, ...validateReview],
  async (req, res, next) => {
    const recipe = await Recipe.findByPk(req.params.recipeId);
    if (!recipe) return recipeNotFound(req, res, next);

    const existingReview = await Review.findOne({
      where: { userId: req.user.id, spotId: req.params.spotId },
    });
    if (existingReview) {
      const err = new Error("User already has a review for this spot");
      err.title = "Review from the current user already exists for the Spot";
      err.errors = { message: "User already has a review for this spot" };
      err.status = 500;
      return next(err);
    }

    const newReview = await Review.create({
      userId: req.user.id,
      spotId: req.params.spotId,
      ...req.body,
    });

    return res.status(201).json(newReview);
  }
);

// get a recipe
router.get("/:recipeId", async (req, res) => {
  const recipe = await getFullRecipe(req.params.recipeId);

  if (!recipe) return recipeNotFound(req, res, next);

  const formattedRecipe = recipe.toJSON();
  formattedRecipe.avgRating = getAvgRating(recipe.Reviews);

  return res.json(formattedRecipe);
});

// edit a recipe
router.put("/:recipeId", [requireAuth, ...validateRecipe], async (req, res) => {
  const recipe = await getFullRecipe(req.params.recipeId);

  if (!recipe) return recipeNotFound(req, res, next);

  if (recipe.userId !== req.user.id) return forbiddenError(req, res, next);

  const {
    name,
    description,
    prepTime,
    cookTime,
    servings,
    directions,
    images,
    ingredients,
    tags,
  } = req.body;

  await recipe.update({
    name,
    description,
    prepTime,
    cookTime,
    servings,
    directions,
  });

  if (tags.length) await recipe.updateTags(tags);
  await recipe.updateRecipeIngredients(ingredients);

  return res.json(recipe);
});

// get all recipes
router.get("/", async (req, res) => {
  const recipes = await Recipe.findAll({
    order: [["updatedAt", "desc"]],
    include: [
      { model: User, attributes: ["username"] },
      {
        model: RecipeImage,
        where: { preview: true },
        attributes: ["url", "preview"],
      },
      { model: Review, attributes: ["stars"] },
      { model: Tag, attributes: ["title"] },
    ],
  });

  const formattedRecipes = recipes.reduce((acc, rec) => {
    const { Reviews, ...recipe } = rec.toJSON();
    acc.push({ ...recipe, avgRating: getAvgRating(Reviews) });
    return acc;
  }, []);

  return res.json({ Recipes: formattedRecipes });
});

// add a recipe
router.post("/", [requireAuth, ...validateRecipe], async (req, res) => {
  const { user } = req;
  const {
    name,
    description,
    prepTime,
    cookTime,
    servings,
    directions,
    images,
    ingredients,
    tags,
  } = req.body;

  const newRecipe = await Recipe.create({
    userId: user.id,
    name,
    description,
    prepTime,
    cookTime,
    servings,
    directions,
  });

  // todo: add recipe images
  await newRecipe.addRecipeIngredients(ingredients);

  if (tags.length) await newRecipe.addTags(tags);

  // todo: return recipe with dependent models data
  return res.status(201).json(newRecipe);
});

// delete a recipe
router.delete("/:recipeId", requireAuth, async (req, res, next) => {
  const recipe = await Recipe.findByPk(req.params.recipeId);
  if (!recipe) return recipeNotFound(req, res, next);

  if (recipe.userId !== req.user.id) return forbiddenError(req, res, next);

  await recipe.destroy();

  return res.json({ message: "Successfully deleted" });
});

module.exports = router;
