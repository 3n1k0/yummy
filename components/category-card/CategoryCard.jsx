import Image from "next/image";
import Link from "next/link";
import styles from "./CategoryCard.module.scss";

const CategoryCard = ({ category }) => {
  return (
    <div className={styles.categoryWrapper}>
      <Image
        className={styles.categoryImage}
        src={category.strCategoryThumb}
        width={148}
        height={150}
        alt={category.strCategory}
      />
      <Link href={`category/${category.strCategory}`}>
        <h3 className={styles.heading}>{category.strCategory}</h3>
      </Link>
    </div>
  );
};

export default CategoryCard;
