import React from "react";
import FoodMenu from "../components/FoodMenu";
import Questions from "../components/Questions";
import Reviews from "../components/Reviews";
import Slider from "../components/Slider";
import Tabs from "../components/Tabs";
import Navbar from "../components/Navbar";
import Markdown from "../components/Markdown";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
    <>
      <Navbar />
      <Reviews />
      <Questions />
      <FoodMenu />
      <Tabs />
      <Slider />
      <Markdown />
      <Pagination />
    </>
  );
};

export default Home;
