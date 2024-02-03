const express = require("express");
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

// get a recipe
router.get("/:recipeId", async (req, res) => {
  const recipe = await Recipe.findByPk(req.params.recipeId, {
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

  if (!recipe) {
    const err = new Error("Recipe couldn't be found");
    err.title = "Couldn't find a Recipe with the specified id";
    err.errors = { message: "Recipe couldn't be found" };
    err.status = 404;
    return next(err);
  }

  const formattedRecipe = recipe.toJSON();
  formattedRecipe.avgRating = getAvgRating(recipe.Reviews);

  return res.json(formattedRecipe);
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

module.exports = router;
