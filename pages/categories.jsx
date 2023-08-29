import React from "react";
import Link from "next/link";
import { getMongoDBRecipes, getRecipesFromMealDB } from "@/database/recipes";

export default function Categories({ categories, recipes }) {
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.strCategory}>
            <h2>
              <Link href={`/category/${category.strCategory}`}>
                {category.strCategory}
              </Link>
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { categoryId } = context.query;

  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );
  const data = await response.json();
  const mealDbCategories = data.categories || [];

  let recipes = [];
  if (categoryId) {
    recipes = await getRecipesFromMealDB(categoryId);
  } else {
    recipes = await getMongoDBRecipes();
  }

  return {
    props: {
      categories: mealDbCategories,
      recipes,
    },
  };
}
