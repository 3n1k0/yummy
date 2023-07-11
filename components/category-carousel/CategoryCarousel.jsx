import Link from "next/link";
import { CategoryCard } from "..";
import styles from "./CategoryCarousel.module.scss";

const CategoryCarousel = ({ categories = [] }) => {
  return (
    <div className={styles.categoryWrapper}>
      <h1>Featured Categories</h1>
      <div className={styles.categories}>
        {categories
          .map((category) => (
            <>
              <Link
                href="/category/[categoryId]"
                as={`/category/${category.id}`}
              >
                {category.name}
              </Link>
              <CategoryCard category={category} />
            </>
          ))
          .slice(2, 6)}
      </div>
      <Link className={styles.seeMoreLink} href="/categories">
        View all categories
      </Link>
    </div>
  );
};
export default CategoryCarousel;
