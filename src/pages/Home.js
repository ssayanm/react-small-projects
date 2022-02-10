import React from "react";
import FoodMenu from "../components/FoodMenu";
import Questions from "../components/Questions";
import Reviews from "../components/Reviews";
import Slider from "../components/Slider";
import Tabs from "../components/Tabs";

const Home = () => {
  return (
    <>
      <Reviews />
      <Questions />
      <FoodMenu />
      <Tabs />
      <Slider />
    </>
  );
};

export default Home;
