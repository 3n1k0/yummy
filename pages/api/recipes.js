import { getRecipes } from '@/database/recipes';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { recipes, error } = await getRecipes();

      if (error) throw new Error(error);

      return res.status(200).json({ recipes }); // Use 'recipes' instead of 'movies'
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} is not allowed.`);
};

export default handler;
