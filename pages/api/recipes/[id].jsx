// pages/api/recipes/[id].js
import { updateRecipe, deleteRecipe } from "@/database/recipes";

const handler = async (req, res) => {
  const { id } = req.query;

  if (req.method === "PUT") {
    try {
      const { name, category, imageURL, instructions, ingredients } = req.body;

      const result = await updateRecipe(
        id,
        name,
        category,
        imageURL,
        instructions,
        ingredients,
      );

      return res.status(200).json({ recipe: result });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to update recipe" });
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

  res.setHeader("Allow", ["PUT", "DELETE"]);
  res.status(405).end(`Method ${req.method} is not allowed.`);
};

export default handler;
