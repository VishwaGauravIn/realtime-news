import React from "react";

export default async function getStaticProps(req, res) {
  let data = {
    name: "Vishwa Gaurav",
    position: "Developer",
    image: "let response = await res.json(data);",
    description: "Turning imagination into Reality",
  };
  let response = await res.json(data);
  return {
    props: {
      response,
    },
  };
}
