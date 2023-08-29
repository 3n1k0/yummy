import React, { useEffect, useState } from "react";
import { getMongoDBRecipes } from "@/database/recipes";
import { RecipeCard } from "@/components";

export default function RecipesPage({ recipes }) {
  const [currentRecipes, setRecipes] = useState(recipes);

  const handleDeleteRecipe = async (recipeId) => {
    try {
      const response = await fetch(`/api/recipes`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipeId }),
      });

      if (response.ok) {
        console.log("Recipe deleted successfully");
        setRecipes(currentRecipes.filter((recipe) => recipe._id !== recipeId));
      } else {
        console.error("Failed to delete recipe");
      }
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  useEffect(() => {}, [currentRecipes]);

  return (
    <div>
      <ul>
        <h1>My recipes</h1>
        {currentRecipes.map((recipe) => (
          <li key={recipe._id}>
            <RecipeCard
              onDelete={() => handleDeleteRecipe(recipe._id)}
              recipe={recipe}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const mongoDbRecipes = await getMongoDBRecipes();

    return {
      props: {
        recipes: mongoDbRecipes,
      },
    };
  } catch (error) {
    console.error("Error fetching MongoDB recipes:", error);
    return {
      props: {
        recipes: [],
      },
    };
  }
}
