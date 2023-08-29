import { updateRecipe, deleteRecipe } from "@/database/recipes";

const handler = async (req, res) => {
  const { id } = req.query;

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
      const { name, category, instructions, imageURL, ingredients } = req.body;

      const result = await createRecipe(
        name,
        category,
        instructions,
        imageURL,
        ingredients,
      );

      console.log(result);
      return res.status(201).json({ recipe: result });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to create recipe" });
    }
  } else if (req.method === "DELETE") {
    try {
      const result = await deleteRecipe(id);

      return res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to delete recipe" });
    }
  }

  res.setHeader("Allow", ["GET", "POST", "DELETE"]);
  res.status(405).end(`Method ${req.method} is not allowed.`);
};

export default handler;
