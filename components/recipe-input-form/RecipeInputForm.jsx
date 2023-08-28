import React, { useState } from "react";
import styles from "./RecipeInputForm.module.scss";

function RecipeInputForm() {
  const [recipeName, setRecipeName] = useState("");
  const [category, setCategory] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [ingredients, setIngredients] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipeData = {
      name: recipeName,
      category,
      instructions,
      imageURL,
      ingredients,
    };

    try {
      const response = await fetch("/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form fields after successful submission
        setRecipeName("");
        setCategory("");
        setInstructions("");
        setImageURL("");
        setIngredients("");
      } else {
        const errorMessage = await response.text();
        console.error("Failed to submit recipe:", errorMessage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.recipeForm} onSubmit={handleSubmit}>
      <label>
        Recipe Name:
        <input
          type="text"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          required
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <label>
        Instructions:
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </label>
      <label>
        Ingredient 1:
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </label>
      {isSubmitted && <p>Recipe submitted successfully!</p>}
      <button type="submit">Submit Recipe</button>
    </form>
  );
}

export default RecipeInputForm;
