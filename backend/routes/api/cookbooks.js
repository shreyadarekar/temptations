const express = require("express");
const { requireAuth, forbiddenError } = require("../../utils/auth");
const {
  Cookbook,
  RecipeCookbook,
  Recipe,
  RecipeImage,
} = require("../../db/models");

const router = express.Router();

const getFullCookbook = (cookbookId) =>
  Cookbook.findByPk(cookbookId, {
    include: [
      {
        model: RecipeCookbook,
        include: [
          {
            model: Recipe,
            attributes: ["id", "name"],
            include: [{ model: RecipeImage, attributes: ["url", "preview"] }],
          },
        ],
      },
    ],
  });

// cookbookNotFound
const cookbookNotFound = function (_req, _res, next) {
  const err = new Error("Cookbook couldn't be found");
  err.title = "Couldn't find a Cookbook with the specified id";
  err.errors = { message: "Cookbook couldn't be found" };
  err.status = 404;
  return next(err);
};

// get all current user's cookbooks
router.get("/current", requireAuth, async (req, res, next) => {
  const cookbooks = await Cookbook.findAll({
    where: { userId: req.user.id },
    order: [["updatedAt", "desc"]],
    include: [
      {
        model: RecipeCookbook,
        include: [{ model: Recipe, attributes: ["id", "name"] }],
      },
    ],
  });

  return res.json({ Cookbooks: cookbooks });
});

// get a cookbook
router.get("/:cookbookId", async (req, res, next) => {
  const cookbook = await getFullCookbook(req.params.cookbookId);
  return res.json(cookbook);
});

// add a cookbook
router.post("/", requireAuth, async (req, res, next) => {
  const { title } = req.body;
  const existingCookbook = await Cookbook.findOne({
    where: { userId: req.user.id, title },
  });
  if (existingCookbook) {
    const err = new Error("Not allowed");
    err.title = "Cookbook already exists";
    err.errors = { message: "User already has a cookbook with this title" };
    err.status = 403;
    return next(err);
  }

  const newCookbook = await Cookbook.create({
    userId: req.user.id,
    title,
  });

  return res.json(newCookbook);
});

// add recipe to cookbook
router.put("/:cookbookId/recipes", requireAuth, async (req, res, next) => {
  const cookbook = await Cookbook.findByPk(req.params.cookbookId);
  if (!cookbook) return cookbookNotFound(req, res, next);

  const { recipeIds } = req.body;

  const dbRecipeCookbooks = await cookbook.getRecipeCookbooks();
  for (let dbRecipeCookbook of dbRecipeCookbooks) {
    await dbRecipeCookbook.destroy();
  }
  for (let recipeId of recipeIds) {
    await cookbook.createRecipeCookbook({ recipeId });
  }

  const editedCookbook = await getFullCookbook(req.params.cookbookId);
  return res.status(201).json(editedCookbook);
});

// edit a cookbook
router.put("/:cookbookId", requireAuth, async (req, res, next) => {
  const { title } = req.body;
  const dbCookbook = await Cookbook.findByPk(req.params.cookbookId);
  if (!dbCookbook) return cookbookNotFound(req, res, next);

  await dbCookbook.update({ title });

  return res.json(dbCookbook);
});

// delete a cookbook
router.delete("/:cookbookId", requireAuth, async (req, res, next) => {
  const cookbook = await Cookbook.findByPk(req.params.cookbook);
  if (!cookbook) return cookbookNotFound(req, res, next);

  if (cookbook.userId !== req.user.id) return forbiddenError(req, res, next);

  await cookbook.destroy();

  return res.json({ message: "Successfully deleted" });
});

module.exports = router;
