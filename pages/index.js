import Head from "next/head";
import styles from "./index.module.scss";
import { CategoryCard, Hero } from "@/components";
import Link from "next/link";
import { fetchCategories } from "./api/fetchCategories";

export default function Home({ categories = [] }) {
  return (
    <>
      <Head>
        <title>Yummy</title>
        <meta name="description" content="The best recipes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <h2 className={styles.categoryHeader}>Categories</h2>
        <div className={styles.categories}>
          {categories.map((category) => (
            <>
              <Link
                href="/category/[categoryId]"
                as={`/category/${category.id}`}
              >
                {category.name}
              </Link>
              <CategoryCard category={category} />
            </>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const data = await fetchCategories();

  return {
    props: { categories: data.categories }, // will be passed to the page component as props
  };
}
