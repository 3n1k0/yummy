export async function fetchRecipesFromMealDB(categoryId) {
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
