import React, { useState } from "react";
import styles from "./RecipeInputForm.module.scss";

const initialFormData = {
  recipeName: "",
  category: "",
  instructions: "",
  imageURL: "",
  ingredients: "",
};

function RecipeInputForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData(initialFormData);
      } else {
        const errorMessage = await response.text();
        console.error("Failed to submit recipe:", errorMessage);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={styles.recipeForm} onSubmit={handleSubmit}>
      <label>
        Recipe Name:
        <input
          type="text"
          name="recipeName"
          value={formData.recipeName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </label>
      <label>
        Instructions:
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="imageURL"
          value={formData.imageURL}
          onChange={handleChange}
        />
      </label>
      <label>
        Ingredient 1:
        <input
          type="text"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
        />
      </label>
      {isSubmitted && <p>Recipe submitted successfully!</p>}
      <button type="submit">Submit Recipe</button>
    </form>
  );
}

export default RecipeInputForm;
