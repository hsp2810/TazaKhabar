const NewsItem = (props) => {
  const {
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
  } = props.newsItem;

  const reduceTitleText = () => {
    if (title.toString().length >= 80)
      return title.toString().substring(0, 80).concat("...");
    return title;
  };

  const reduceDescText = () => {
    if (description && description.toString().length >= 120)
      return description.toString().substring(0, 120).concat("...");
    return description;
  };

  const convertDateTime = () => {
    // Convert the datetime to the date
    const date = new Date(publishedAt);
    const year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();

    if (month < 10) {
      month = "0".concat(month.toString());
    }

    if (day < 10) {
      day = "0".concat(day.toString());
    }

    return `${year}-${month}-${day}`;
  };

  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <img
        className='rounded-t-lg'
        src={urlToImage}
        alt='Image not loaded'
        style={{ height: "30vh", width: "30vw" }}
      />
      <div className='p-5'>
        <a
          href={url}
          className='hover:underline transition-all'
          target='_blank'
        >
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {reduceTitleText()}
          </h5>
        </a>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {reduceDescText()}
        </p>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          Posted by:{" "}
          <span className='font-semibold'>
            {source.name ? source.name : "Unknown"}
          </span>
        </p>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          Posted On: <span className='font-semibold'>{convertDateTime()}</span>
        </p>
      </div>
      <button
        style={{ margin: "1rem" }}
        className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Read more
        <svg
          className='w-3.5 h-3.5 ml-2'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 14 10'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M1 5h12m0 0L9 1m4 4L9 9'
          />
        </svg>
      </button>
    </div>
  );
};

export default NewsItem;
