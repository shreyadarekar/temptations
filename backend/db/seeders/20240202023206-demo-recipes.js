"use strict";

const {
  Recipe,
  RecipeImage,
  Review,
  RecipeIngredient,
  Ingredient,
  Unit,
  Tag,
} = require("../models");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const recipes = [
  {
    userId: 1,
    name: "Shrimp Scampi with Pasta",
    description:
      "Shrimp scampi with linguine is the ultimate seafood pasta dish. Works with any pasta; angel hair is less filling.",
    prepTime: 20,
    cookTime: 20,
    servings: 6,
    directions:
      "Boil the pasta in well-salted water, drain, and hold aside before cooking the shrimp scampi. You'll add the pasta to the hot skillet to warm it before serving. Time your cooking so you're ready to start cooking the shrimp immediately after the pasta is drained; you don't want the pasta to sit for too long.",
    tags: ["seafood", "italian"],
    recipeImages: [
      {
        url: "https://shreyaappacademy.s3.us-west-1.amazonaws.com/229960-shrimp-scampi-with-pasta-DDMFS-4x3-e065ddef4e6d44479d37b4523808cc23.jpg",
        preview: true,
      },
      {
        url: "https://shreyaappacademy.s3.us-west-1.amazonaws.com/image.webp",
        preview: false,
      },
    ],
    reviews: [
      {
        userId: 2,
        content: "This is a super simple recipe.",
        stars: 4,
      },
      {
        userId: 3,
        content: "What a delecious a recipe!",
        stars: 5,
      },
    ],
    ingredients: [
      {
        name: "linguine pasta",
        unit: "ounce",
        amount: 16,
      },
      {
        name: "butter",
        unit: "tbsp",
        amount: 2,
      },
      {
        name: "extra-virgin olive oil",
        unit: "tbsp",
        amount: 2,
      },
      {
        name: "shallots",
        unit: "",
        amount: 2,
      },
      {
        name: "garlic",
        unit: "clove",
        amount: 2,
      },
      {
        name: "red pepper flakes",
        unit: "pinch",
        amount: 1,
      },
      {
        name: "shrimp",
        unit: "pound",
        amount: 1,
      },
      {
        name: "kosher salt",
        unit: "pinch",
        amount: 1,
      },
      {
        name: "dry white wine",
        unit: "cup",
        amount: 0.5,
      },
      {
        name: "lemon",
        unit: "",
        amount: 1,
      },
    ],
  },
  {
    userId: 2,
    name: "Tandoori Chicken",
    description:
      "Try this authentic tandoori chicken that's marinated in yogurt and spices, then cooked on the grill instead of a clay oven so you can make it at home. Serve with long-grain basmati rice, grilled veggies, roasted corn on the cob, and a cucumber salad.",
    prepTime: 25,
    cookTime: 20,
    servings: 4,
    directions:
      "Remove and discard skin from chicken pieces. Cut slits into meat and place into a shallow dish. Season chicken on both sides with lemon juice and salt. Let sit for 20 minutes. Mix yogurt, onion, garlic, garam masala, ginger, and cayenne pepper together in a medium bowl until smooth, then stir in food coloring. Spread yogurt mixture over chicken, cover, and refrigerate for 6 to 24 hours (the longer the better). When ready to cook, preheat an outdoor grill for medium-high heat and lightly oil the grate. Remove chicken from marinade. Discard remaining marinade. Cook chicken on the preheated grill until no longer pink and the juices run clear. An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C). Garnish with cilantro and lemon wedges.",
    tags: ["indian", "gluten-free"],
    recipeImages: [
      {
        url: "https://shreyaappacademy.s3.us-west-1.amazonaws.com/50347-indian-tandoori-chicken-DDMFS-step-08-3019-1f2a4c75928a4a38bdfd6f3f918c90ff.webp",
        preview: true,
      },
      {
        url: "https://shreyaappacademy.s3.us-west-1.amazonaws.com/50347-indian-tandoori-chicken-DDMFS-step-07-3018-6cd03e86bce0463bb76cd3d45afbd18a.webp",
        preview: false,
      },
      {
        url: "https://shreyaappacademy.s3.us-west-1.amazonaws.com/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg",
        preview: false,
      },
    ],
    reviews: [
      {
        userId: 1,
        content: "Just quick and easy recipe.",
        stars: 4,
      },
      {
        userId: 3,
        content: "It's simply superb!",
        stars: 5,
      },
    ],
    ingredients: [
      {
        name: "chicken",
        unit: "pound",
        amount: 2,
      },
      {
        name: "lemon",
        unit: "",
        amount: 1,
      },
      {
        name: "salt",
        unit: "tsp",
        amount: 1,
      },
      {
        name: "yogurt",
        unit: "cup",
        amount: 1.5,
      },
      {
        name: "onion",
        unit: "",
        amount: 0.5,
      },
      {
        name: "garlic",
        unit: "clove",
        amount: 1,
      },
      {
        name: "garam masala",
        unit: "tsp",
        amount: 2,
      },
      {
        name: "ginger",
        unit: "tsp",
        amount: 1,
      },
      {
        name: "cayenne pepper",
        unit: "tsp",
        amount: 1,
      },
      {
        name: "cilantro",
        unit: "tsp",
        amount: 2,
      },
    ],
  },
  {
    userId: 3,
    name: "Homemade Sushi Rolls",
    description:
      "This recipe will teach you how to make some popular sushi rolls like California rolls, Philadelphia rolls, or spicy tuna rolls at home.",
    prepTime: 45,
    cookTime: 15,
    servings: 24,
    directions:
      "Put rice into a large deep bowl. Fill with cold water and rub rice together with hands until water turns milky white. Drain cloudy water, being careful not to pour out rice. Repeat three or four times until you can see rice through 3 inches of water; drain once more. Transfer rice to a saucepan; add kombu and 3 cups water. Let stand 30 minutes. Cover; bring to a boil over high heat. Reduce heat to low; simmer 10 minutes. Remove from heat and let stand, covered, 5 minutes. Meanwhile, stir together rice vinegar, sugar, and salt in a small bowl until dissolved. Remove and discard kombu; stir in vinegar mixture until no lumps remain. Spread rice mixture onto a rimmed 9x13 baking sheet. [Spreading helps cool rice and prevents it from continuing to cook.] Let cool to room temperature. Lay one sheet of nori on a sushi mat lined with plastic wrap; spread 1 cup of rice over nori with damp fingers, leaving a 1-inch border along one edge. Arrange desired fillings (see below) crosswise just off center of rice. Carefully lift filled edge of nori and roll over filling toward unfilled edge, tucking as you roll. Brush unfilled edge of nori with water; press to seal. Cut each roll into 8 pieces. Repeat with remaining nori, rice, and fillings. To make ahead, chill, covered, up to 4 hours.",
    tags: ["seafood", "korean", "gluten-free"],
    recipeImages: [
      {
        url: "https://shreyaappacademy.s3.us-west-1.amazonaws.com/8536667-you-can-make-sushi-rolls-4x3-1-6ba19ffc7e494df88b2e0cd50956d4e8.webp",
        preview: true,
      },
    ],
    reviews: [
      {
        userId: 1,
        content: "Just quick and easy recipe.",
        stars: 4,
      },
      {
        userId: 2,
        content: "It's simply superb!",
        stars: 5,
      },
    ],
    ingredients: [
      {
        name: "sushi rice",
        unit: "cup",
        amount: 1.5,
      },
      {
        name: "water",
        unit: "cup",
        amount: 3,
      },
      {
        name: "dried kelp",
        unit: "",
        amount: 1,
      },
      {
        name: "rice wine",
        unit: "tbsp",
        amount: 2,
      },
      {
        name: "sugar",
        unit: "tbsp",
        amount: 2,
      },
      {
        name: "salt",
        unit: "tsp",
        amount: 1,
      },
      {
        name: "nori seaweed sheets",
        unit: "",
        amount: 4,
      },
    ],
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    for (let recipe of recipes) {
      const { recipeImages, reviews, ingredients, tags, ...recipeDetails } =
        recipe;
      const newRecipe = await Recipe.create({ ...recipeDetails });

      for (let title of tags) {
        await Tag.create({ recipeId: newRecipe.id, title });
      }

      for (let image of recipeImages) {
        await RecipeImage.create({ recipeId: newRecipe.id, ...image });
      }

      for (let review of reviews) {
        await Review.create({ recipeId: newRecipe.id, ...review });
      }

      for (let recipeIngredient of ingredients) {
        const { name, unit, amount } = recipeIngredient;

        const dbIngredient = await Ingredient.findOne({
          where: { name },
          logging: console.log,
        });

        const dbUnit = await Unit.findOne({ where: { unit } });

        await RecipeIngredient.create({
          recipeId: newRecipe.id,
          ingredientId: dbIngredient.id,
          unitId: dbUnit.id,
          amount,
        });
      }
    }
  },

  async down(queryInterface, Sequelize) {
    for (let recipe of recipes) {
      const { name } = recipe;

      await Recipe.destroy({ where: { name } });
    }
  },
};
