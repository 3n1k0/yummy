import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Category({ recipes, categoryId }) {
  if (!categoryId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{categoryId}</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>
            <Link href={`/recipe/${recipe.idMeal}`}>{recipe.strMeal}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { categoryId } = context.query;
  let recipes = [];

  if (categoryId) {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`
    );
    const data = await res.json();
    recipes = data.meals || [];
  }

  return {
    props: {
      recipes,
      categoryId,
    },
  };
}
