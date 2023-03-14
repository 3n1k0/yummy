import { useRouter } from "next/router";

const CategoryPage = () => {
  const router = useRouter();
  const { categoryId } = router.query;

  return <p>Post: {categoryId}</p>;
};

export default CategoryPage;
