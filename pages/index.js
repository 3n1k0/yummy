import Head from "next/head";

import { CategoryCarousel, Hero } from "@/components";
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
        <CategoryCarousel categories={categories}/>
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
