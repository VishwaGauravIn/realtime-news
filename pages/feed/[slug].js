import React from "react";
import styles from '../../styles/Feed.module.css'

export const Feed = ({ pageNumber, articles }) => {
    console.log(articles,pageNumber)
  return <div className={styles.main}>
      {articles.map((articles,index)=>(
          <div key={index} className={styles.post}>
              <h1 className="" onClick={()=> window.location.href = articles.url}>{articles.title}</h1>
              <p className="">{articles.description}</p>
              { !!articles.urlToImage && <img src={articles.urlToImage} alt="" /> }
          </div>
      ))}
  </div>;
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;
  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }
  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );
  const apiJson = await apiResponse.json();

  const { articles } = apiJson;
  return {
    props: {
      articles,
      pageNumber: parseInt(pageNumber),
    },
  };
};

export default Feed;
