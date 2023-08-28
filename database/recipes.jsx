import clientPromise from "./index";

let recipesCollection;

async function init() {
  try {
    if (recipesCollection) {
      console.log("Recipes collection is already initialized.");
      return;
    }

    const client = await clientPromise;
    const db = client.db();
    recipesCollection = db.collection("recipes");
    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Failed to establish connection to database:", error);
    throw new Error("Failed to establish connection to database");
  }
}

export async function getRecipesFromMealDB(categoryId) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`,
    );
    const data = await response.json();
    const mealDbRecipes = data.meals || [];
    return mealDbRecipes;
  } catch (error) {
    console.error("Failed to fetch recipes from MealDB:", error);
    throw new Error("Failed to fetch recipes from MealDB");
  }
}

export async function getMongoDBRecipes() {
  try {
    if (!recipesCollection) await init();
    const result = await recipesCollection.find({}).limit(20).toArray();

    const serializedResult = result.map((recipe) => ({
      ...recipe,
      _id: recipe._id.toString(),
    }));

    return serializedResult;
  } catch (error) {
    console.error("Failed to fetch recipes from MongoDB:", error);
    throw new Error("Failed to fetch recipes from MongoDB");
  }
}

export async function createRecipe(name, category, instructions) {
  try {
    if (!recipesCollection) await init();
    const result = await recipesCollection.insertOne({
      name,
      category,
      instructions,
    });
    return result.ops[0];
  } catch (error) {
    console.error("Error creating recipe:", error);
    throw new Error("Failed to create recipe");
  }
}

export async function deleteRecipe(recipeId) {
  try {
    if (!recipesCollection) await init();
    const result = await recipesCollection.deleteOne({
      _id: recipeId,
    });
    return result.deletedCount;
  } catch (error) {
    console.error("Error deleting recipe:", error);
    throw new Error("Failed to delete recipe");
  }
}

export default {
  getMongoDBRecipes,
  createRecipe,
  deleteRecipe,
};
