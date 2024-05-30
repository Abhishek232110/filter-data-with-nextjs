"use client";

import HomePage from "./home/home";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [getData, setGetData] = useState();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((ele) => setGetData(ele.data));
  }, []);

  return (
    <main className="px-4  py-5 md:px-10 md:py-8">
      <HomePage getData={getData} />
    </main>
  );
}
