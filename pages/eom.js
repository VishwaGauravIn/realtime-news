import Head from "next/head";
import React from "react";
import { Toolbar } from "../components/Toolbar";
import styles from "../styles/EOM.module.css";

export const eom = ({ employee }) => {
  return (
    <>
      <Head>
        <title>Employee Of The Month</title>
        <meta
          name="description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="og:image" content={employee.image} />
        <meta property="og:title" content="Employee Of The Month" />
        <meta
          property="og:description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="twitter:image" content={employee.image} />
        <meta property="twitter:title" content="Employee Of The Month" />
        <meta
          property="twitter:description"
          content={`This month's employee of the month is ${employee.name}`}
        />
      </Head>
      <div className="page-container">
        <Toolbar />
        <div className={styles.main}>
          <h1 className="">Employee of the Month </h1>
          <div className={styles.employeeOfTheMonth}>
            <h3 className="">{employee.name}</h3>
            <h6 className="">{employee.position}</h6>
            <img src={employee.image} alt="" className="" />
            <p className="">{employee.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch("https://realtime-news.vercel.app/api");
  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default eom;
