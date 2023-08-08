import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CategoryCard.module.scss";


function transformCategoryName(categoryName){
  return categoryName.toLowerCase().replace(/ /g, "-"); 
}


const CategoryCard = ({ category }) => {
  if (!category || !category.strCategoryThumb || !category.strCategory) {
    return null; 
  }

  const {strCategory, strCategoryThumb} = category;

  return (
    <Link
      data-testid="category-card-wrapper" 
      className={styles.cardWrapper}
      href={`category/${transformCategoryName(strCategory)}`}
    >
      <div className={styles.categoryImageWrapper}>
        <Image
          className={styles.categoryImage}
          src={strCategoryThumb}
          alt={strCategory}
          fill
        />
      </div>
      <h3 className={styles.categoryHeading}>{strCategory}</h3>
    </Link>
  );
};

export default CategoryCard;
