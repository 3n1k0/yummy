import Image from "next/image";
import { fetchRecipe } from "../api/fetchRecipe";

export default function Recipe({ recipe }) {
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
      <Image src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h1>{recipe.strMeal} </h1>
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

export async function getServerSideProps(context) {
  const { recipeId } = context.query;
  const recipe = await fetchRecipe(recipeId);

  return {
    props: {
      recipe,
    },
  };
}
