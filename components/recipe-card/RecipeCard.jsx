import React from "react";

function RecipeCard({ recipe, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(recipe.id);
  };

  const { imageURL } = recipe;

  const placeholderImage =
    "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";

  return (
    <div>
      <h2>{recipe.name}</h2>
      <img width={100} height={100} src={imageURL || placeholderImage} />
      <p>{recipe.category}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default RecipeCard;
