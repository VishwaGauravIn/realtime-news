import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="page-container">
      <div className={styles.main}>
        <h1 className="">Next.js News App</h1>
        <h3 className="">Your one stop shop for the latest news articles</h3>
      </div>
    </div>
  );
}
