import React from "react";
import Link from "next/link";
import { CategoryCard } from "..";
import styles from "./CategoryCarousel.module.scss";

const CategoryCarousel = ({ categories = [], heading }) => {
  return (
    <div className={styles.categoryWrapper}>
      <h1>{heading}</h1>
      <div className={styles.categories}>
        {categories.map((category) => (
          <React.Fragment key={category.id}>
            <Link href="/category/[categoryId]" as={`/category/${category.id}`}>
              {category.name}
            </Link>
            <CategoryCard category={category} />
          </React.Fragment>
        ))}
      </div>
      <Link className={styles.seeMoreLink} href="/categories">
        View all categories
      </Link>
    </div>
  );
};

export default CategoryCarousel;
