import NewsItem from "./NewsItem";

export const NewsBox = ({ news }) => {
  return (
    <div className='grid grid-cols-3 gap-4 p-6'>
      {!news
        ? "No news "
        : news.map((newsItem, index) => {
            return <NewsItem key={index} newsItem={newsItem} />;
          })}
    </div>
  );
};
