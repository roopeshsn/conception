import Head from "next/head";
import HomePage from "../Components/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Conception</title>
        <meta name='description' content='Conceptions you need' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomePage />
    </div>
  );
}
