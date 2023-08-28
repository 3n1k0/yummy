import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getRecipes } from "@/database/recipes";

export default function CategoryPage({ categories, recipes }) {
  const router = useRouter();
  const { categoryId } = router.query;

  const category = categories.find((cat) => cat.strCategory === categoryId);

  if (!category) {
    return <div>Loading...</div>;
  }

  const categoryRecipes = recipes.filter(
    (recipe) => recipe.category === categoryId,
  );

  return (
    <div>
      <h1>{category.strCategory}</h1>
      <Link href="/categories">Back to Categories</Link>
      <ul>
        {categoryRecipes.map((recipe) => (
          <li key={recipe._id}>
            <Link href={`/recipe/${recipe._id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { categoryId } = params;

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
