import Head from "next/head";
import { Toolbar } from "../components/Toolbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Realtime News</title>
        <meta name="title" content="Realtime News" />

        <meta name="description" content="Just get the realtime news" />

        <meta name="copyright" content="VishwaGauravIn" />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://realtime-news.vercel.app" />

        <meta property="og:title" content="Realtime News" />

        <meta property="og:description" content="Just get the realtime news" />

        <meta
          property="og:image"
          content="https://scontent.fixr1-1.fna.fbcdn.net/v/t31.18172-8/14054362_1031311303631470_1022595763387660713_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=6Nd_E0c8ny8AX-UNiKz&_nc_ht=scontent.fixr1-1.fna&oh=00_AT-bxgEHEaFn-mgIvNkZn8J_Mmvwu1hQgm2ZSM9CQiOZzA&oe=62331B93"
        />

        <meta property="twitter:card" content="summary_large_image" />

        <meta
          property="twitter:url"
          content="https://realtime-news.vercel.app"
        />

        <meta property="twitter:title" content="Realtime News" />

        <meta
          property="twitter:description"
          content="Just get the realtime news"
        />

        <meta
          property="twitter:image"
          content="https://scontent.fixr1-1.fna.fbcdn.net/v/t31.18172-8/14054362_1031311303631470_1022595763387660713_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=6Nd_E0c8ny8AX-UNiKz&_nc_ht=scontent.fixr1-1.fna&oh=00_AT-bxgEHEaFn-mgIvNkZn8J_Mmvwu1hQgm2ZSM9CQiOZzA&oe=62331B93"
        />
      </Head>
      <div className="page-container">
        <Toolbar />
        <div className={styles.main}>
          <h1>Next.js News App</h1>
          <h3>Your one stop shop for the latest news articles</h3>
        </div>
      </div>
    </>
  );
}
