import React from 'react';
import { getMongoDBRecipes } from '@/database/recipes';
import { RecipeCard } from '@/components';

export default function RecipesPage({ recipes }) {
  return (
    <div>
      <ul>
        <h1>My recipes</h1>
        {recipes.map((recipe) => (
          <li key={recipe._id}><RecipeCard onDelete={()=>{console.log('recipe deleted')}} recipe={recipe}/></li>
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
