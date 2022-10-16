import Head from "next/head"
import HomePage from "../Components/HomePage"
import { getAllCategory } from "../lib/mdx-processor"

export default function Home({ categories }) {
  return (
    <div>
      <Head>
        <title>Conception</title>
        <meta name="description" content="Conceptions you need" />
        <link rel="icon" href="/c-logo.ico" />
      </Head>
      <HomePage categories={categories} />
    </div>
  )
}

export async function getStaticProps() {
  const categories = await getAllCategory()
  return {
    props: { categories },
  }
}
