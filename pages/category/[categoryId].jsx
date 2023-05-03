import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Category() {
  const router = useRouter();
  const { categoryId } = router.query;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`
      );
      const data = await res.json();
      setRecipes(data.meals);
    }
    if (categoryId) {
      fetchRecipes();
    }
  }, [categoryId]);

  if (!categoryId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{categoryId}</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>
            <Link href={`/recipe/${recipe.idMeal}`}>{recipe.strMeal}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
