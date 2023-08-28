import React from "react";
import Image from "next/image";
import styles from "./Recipe.module.scss";
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
    <div className={styles.recipeContainer}>
      <h1 className={styles.recipeHeader}>{recipe.strMeal}</h1>
      <Image
        className={styles.recipeImage}
        width={300}
        height={300}
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <h2>Ingredients</h2>
      <ul className={styles.ingredientsList}>
        {ingredients.map((ingredient, index) => (
          <li className={styles.ingredientsListItem} key={index}>
            {ingredient}
          </li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p className={styles.instructions}>{recipe.strInstructions}</p>
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
