import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Recipe() {
  const router = useRouter();
  const { recipeId } = router.query;
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
      );
      const data = await res.json();
      setRecipe(data.meals[0]);
    }
    if (recipeId) {
      fetchRecipe();
    }
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredients.push(`${ingredient} - ${measure}`);
    } else if (ingredient) {
      ingredients.push(ingredient);
    }
  }

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}
