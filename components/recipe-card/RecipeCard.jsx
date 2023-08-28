import React from "react";

function RecipeCard({ recipe, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(recipe.id);
  };

  return (
    <div>
      <h3>{recipe.strMeal}</h3>
      <p>{recipe.category}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default RecipeCard;
