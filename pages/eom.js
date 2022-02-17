import React from "react";
import { Toolbar } from "../components/Toolbar";
import styles from "../styles/EOM.module.css";

export const eom = ({ employee }) => {
  console.log(employee);
  return (
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
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );
  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default eom;
