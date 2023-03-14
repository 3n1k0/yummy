import Image from "next/image";
import styles from "./CategoryCard.module.scss";

const CategoryCard = ({ category }) => {
  return (
    <div className={styles.categoryWrapper}>
      <Image
        className={styles.categoryImage}
        src={category.strCategoryThumb}
        width={150}
        height={150}
        alt={category.strCategory}
      />
      <h3 className={styles.heading}>{category.strCategory}</h3>
    </div>
  );
};

export default CategoryCard;
