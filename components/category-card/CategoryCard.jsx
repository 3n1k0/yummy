import Image from "next/image";
import styles from "./CategoryCard.module.scss";

const CategoryCard = ({ category }) => {
  return (
    <div className={styles.categoryWrapper}>
      <h3 className={styles.heading}>{category.strCategory}</h3>
      <Image
        className={styles.categoryImage}
        src={category.strCategoryThumb}
        width={100}
        height={100}
        alt={category.strCategory}
      />
    </div>
  );
};

export default CategoryCard;
