const express = require("express");
const { Recipe, RecipeImage, Review } = require("../../db/models");

const router = express.Router();

// get all recipes
router.get("/", async (req, res) => {
  const recipes = await Recipe.findAll({
    order: [["updatedAt", "desc"]],
    include: [
      {
        model: RecipeImage,
        where: { preview: true },
        attributes: ["url"],
      },
      {
        model: Review,
        attributes: ["stars"],
      },
    ],
  });

  const formattedRecipes = recipes.reduce((acc, rec) => {
    const { Reviews, RecipeImages, ...recipe } = rec.toJSON();
    const formattedRecipe = { ...recipe, avgRating: 0, previewImage: "" };

    // set avgRating
    const sumStars = Reviews.reduce((sum, rev) => sum + rev.stars, 0);
    if (Reviews.length)
      formattedRecipe.avgRating = Number(
        (sumStars / Reviews.length).toFixed(1)
      );

    // set previewImage
    if (RecipeImages.length) formattedRecipe.previewImage = RecipeImages[0].url;

    acc.push(formattedRecipe);
    return acc;
  }, []);

  return res.json({ Recipes: formattedRecipes });
});

module.exports = router;
