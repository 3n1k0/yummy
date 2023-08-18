export const fetchCategories = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );
  return await response.json();
};
