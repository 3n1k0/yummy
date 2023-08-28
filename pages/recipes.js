import React from 'react';
import { getMongoDBRecipes } from '@/database/recipes';

export default function RecipesPage({ recipes }) {
  return (
    <div>
      <ul>
        <h1>hello</h1>
        {recipes.map((recipe) => (
          <li key={recipe._id}>{recipe.name}</li>
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
    console.error('Error fetching MongoDB recipes:', error);
    return {
      props: {
        recipes: [],
      },
    };
  }
}
