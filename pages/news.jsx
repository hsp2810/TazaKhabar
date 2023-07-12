import Head from "next/head";
import { NewsBox } from "../components/NewsBox";

export default function News({ news }) {
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
          <NewsBox news={news} />
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const url = `
  https://newsapi.org/v2/everything?q=tesla&from=2023-06-12&sortBy=publishedAt&apiKey=7ae99f6c3951421e982d3d66de158316`;

  // Fetching the Data from the newsapi
  const data = await fetch(url);
  const newsArray = await data.json();
  return {
    props: { news: newsArray.articles },
  };
};
