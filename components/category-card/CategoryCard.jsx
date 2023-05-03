import Image from "next/image";
import Link from "next/link";
import styles from "./CategoryCard.module.scss";

const CategoryCard = ({ category }) => {
  return (
    <div className={styles.categoryWrapper}>
      <Link href={`category/${category.strCategory}`}>
        <Image
          className={styles.categoryImage}
          src={category.strCategoryThumb}
          width={150}
          height={140}
          alt={category.strCategory}
        />
        <h3 className={styles.heading}>{category.strCategory}</h3>
      </Link>
    </div>
  );
};

export default CategoryCard;
