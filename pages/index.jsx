import Head from "next/head";
import { NewsBox } from "../components/NewsBox";

export default function Home({ news }) {
  return (
    <>
      <Head>
        <title>NewsMonkey-Home</title>
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.css'
          rel='stylesheet'
        />
      </Head>
      <main className='main_container'>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-3xl mt-10'>Breaking News</h1>
          <NewsBox news={news} />
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async (context) => {
  console.log("In the server side props function");
  const url = `
  https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7ae99f6c3951421e982d3d66de158316`;

  // Fetching the Data from the newsapi
  const data = await fetch(url);
  const newsArray = await data.json();
  return {
    props: { news: newsArray.articles },
  };
};
