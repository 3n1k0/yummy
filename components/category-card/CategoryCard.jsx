import Image from "next/image";
import Link from "next/link";
import styles from "./CategoryCard.module.scss";

const CategoryCard = ({ category }) => {
  return (
    <Link className={styles.link} href={`category/${category.strCategory}`}>
      <div className={styles.categoryImageWrapper}>
        <Image
          className={styles.categoryImage}
          src={category.strCategoryThumb}
          fill={true}
          alt={category.strCategory}
        />
      </div>
      <h3 className={styles.categoryHeading}>{category.strCategory}</h3>
    </Link>
  );
};

export default CategoryCard;
