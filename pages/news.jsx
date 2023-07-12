import Head from "next/head";
import { NewsBox } from "../components/NewsBox";

export default function News() {
  return (
    <div>
      <Head>
        <title>NewsMonkey-All News</title>
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.css'
          rel='stylesheet'
        />
      </Head>
      <main className='news_container'>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-3xl mt-10'>All News</h1>
          <NewsBox />
        </div>
      </main>
    </div>
  );
}
