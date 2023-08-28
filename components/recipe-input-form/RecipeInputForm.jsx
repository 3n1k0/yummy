import React, { useState } from 'react';
import styles from './RecipeInputForm.module.scss';

function RecipeInputForm() {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [cookingTime, setCookingTime] = useState('');

    return (
        <form className={styles.recipeForm}>
            <label className={styles.label}>
                Recipe Name:
                <input
                    className={styles.input}
                    type="text"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                    required
                />
            </label>
            <label className={styles.label}>
                Ingredients:
                <textarea
                    className={styles.textarea}
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    required
                />
            </label>
            <label className={styles.label}>
                Instructions:
                <textarea
                    className={styles.textarea}
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    required
                />
            </label>
            <label className={styles.label}>
                Cooking Time:
                <input
                    className={styles.input}
                    type="text"
                    value={cookingTime}
                    onChange={(e) => setCookingTime(e.target.value)}
                />
            </label>
            <button className={styles.submitButton} type="submit">
                Submit Recipe
            </button>
        </form>
    );
}

export default RecipeInputForm;
