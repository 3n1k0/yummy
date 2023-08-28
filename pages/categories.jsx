import React from "react";
import Link from "next/link";
import { getRecipes } from "@/database/recipes";

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

export async function getServerSideProps() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );
  const data = await response.json();
  const mealDbCategories = data.categories || [];

  // Fetch recipes from MongoDB
  const { recipes } = await getRecipes();

  return {
    props: {
      categories: mealDbCategories,
      recipes,
    },
  };
}
