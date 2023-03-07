import Image from "next/image";

const CategoryCard = ({ category }) => {
  return (
    <>
      <h1>{category.strCategory}</h1>
      <Image
        src={category.strCategoryThumb}
        width={100}
        height={100}
        alt={category.strCategory}
      />
    </>
  );
};

export default CategoryCard;
