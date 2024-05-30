"use client";
import { useEffect, useState } from "react";
import { HomeBody } from "./components/homeBody";
import axios from "axios";

const HomePage = () => {
  const [getData, setGetData] = useState();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((ele) => setGetData(ele.data));
  }, []);

  return (
    <div>
      <HomeBody getData={getData} />
    </div>
  );
};

export default HomePage;
