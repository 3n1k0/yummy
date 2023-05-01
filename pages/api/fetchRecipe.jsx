    
export const fetchRecipe = async (recipeId) => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
      );
      const data = await res.json();
      return data.meals[0];
    }
