import {
  getMongoDBRecipes,
  createRecipe,
  deleteRecipe,
} from "@/database/recipes";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const mealDbRecipes = await getRecipesFromMealDB();
      const mongoDbRecipes = await getMongoDBRecipes();
      const allRecipes = [...mealDbRecipes, ...mongoDbRecipes];
      if (error) throw new Error(error);

      return res.status(200).json({ recipes: allRecipes });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else if (req.method === "POST") {
    try {
      const { name, category, instructions } = req.body;

      const result = await createRecipe(name, category, instructions);

      return res.status(201).json({ recipe: result });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to create recipe" });
    }
  } else if (req.method === "DELETE") {
    try {
      const { recipeId } = req.body;

      const deletedCount = await deleteRecipe(recipeId);

      if (deletedCount === 0) {
        return res.status(404).json({ error: "Recipe not found" });
      }

      return res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to delete recipe" });
    }
  }

  res.setHeader("Allow", ["GET", "POST", "DELETE"]);
  res.status(405).end(`Method ${req.method} is not allowed.`);
}
