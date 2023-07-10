import Head from "next/head";
import styles from './index.module.scss'

import { CategoryCard, CategoryCarousel, Hero } from "@/components";
import Link from "next/link";

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
        <div className={styles.categoryWrapper}>
          <h1>Featured Categories</h1>
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
            )).slice(2, 6)}
          </div>
          <Link className={styles.seeMoreLink} href="/categories">View all categories</Link>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetchCategories();

  return {
    props: { categories: data.categories }, // will be passed to the page component as props
  };
}
