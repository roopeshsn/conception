import Head from "next/head"
import HomePage from "../Components/HomePage"
import { getAllCategory } from "../lib/mdx-processor"

export default function Home({ categories }) {
  return (
    <div>
      <Head>
        <title>Conception</title>
        <meta name="description" content="Ideas you need" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/pages/site.webmanifest"></link>
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
