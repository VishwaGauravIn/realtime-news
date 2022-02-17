import React from "react";

export default async function getStaticProps(req, res) {
  let data = {
    name: "Vishwa Gaurav",
    position: "Developer",
    image: "https://pbs.twimg.com/profile_images/1474388720564375556/qqSmbKks_400x400.jpg",
    description: "Turning imagination into Reality",
  };
  let response = await res.json(data);
  return {
    props: {
      response,
    },
  };
}
