import React from 'react';
import RecipeInputForm from '@/components/recipe-input-form/RecipeInputForm';

function SubmitRecipePage() {
    return (
        <div className="container">
            <h1 className="page-title">Submit a New Recipe</h1>
            <RecipeInputForm />
        </div>
    );
}

export default SubmitRecipePage;
