import React from "react";
import styles from "../../styles/Feed.module.css";
import { useRouter } from "next/router";
import { Toolbar } from "../../components/Toolbar";
import Head from "next/head";

export const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();
  console.log(articles, pageNumber);
  return (
    <>
      <Head>
        <title>Feed - Realtime News</title>
        <meta property="og:image" content={articles[0]?.urlToImage} />
        <meta property="og:description" content={articles[0]?.description} />
        <meta property="og:title" content={articles[0]?.title + " and more!"} />
      </Head>
      <div className="page-container">
        <Toolbar />
        <div className={styles.main}>
          {articles.map((articles, index) => (
            <div key={index} className={styles.post}>
              <h1 onClick={() => (window.location.href = articles.url)}>
                {articles.title}
              </h1>
              <p>{articles.description}</p>
              {!!articles.urlToImage && (
                <img src={articles.urlToImage} alt="" />
              )}
            </div>
          ))}
        </div>
        <div className={styles.paginator}>
          <div
            onClick={() => {
              if (pageNumber > 1) {
                router
                  .push(`/feed/${pageNumber - 1}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
            className={pageNumber === 1 ? styles.disabled : styles.active}
          >
            Previous Page
          </div>
          <div>#{pageNumber}</div>
          <div
            onClick={() => {
              if (pageNumber < 5) {
                router
                  .push(`/feed/${pageNumber + 1}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
            className={pageNumber === 5 ? styles.disabled : styles.active}
          >
            Next Page
          </div>
        </div>
      </div>
    </>
  );
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
