import clientPromise from './index';

let recipes;

// Initialize recipes collection
async function init() {
  console.log('Initializing the database...');
  if (recipes) {
    console.log('Recipes collection is already initialized.');
    return;
  }

  try {
    const client = await clientPromise;
    const db = client.db();
    recipes = db.collection('recipes');
    console.log('Recipes collection initialized successfully.');
  } catch (error) {
    console.error('Error initializing the database:', error);
    throw new Error('Failed to establish connection to database');
  }
}

export async function getRecipes() {
  try {
    if (!recipes) await init();
    const result = await recipes
      .find({})
      .limit(20)
      .toArray(); // Use toArray() to get an array of documents

    return { recipes: result };
  } catch (error) {
    return { error: 'Failed to fetch recipes' };
  }
}
