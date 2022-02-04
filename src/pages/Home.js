import React from "react";
import ColorG from "../components/ColorG";
import FoodMenu from "../components/FoodMenu";
import Grocery from "../components/Grocery";
import LoremIpsum from "../components/LoremIpsum";
import Navbar from "../components/Navbar";
import Questions from "../components/Questions";
import Reviews from "../components/Reviews";
import Slider from "../components/Slider";
import Tabs from "../components/Tabs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Reviews />
      <Questions />
      <FoodMenu />
      <Tabs />
      <Slider />
      <LoremIpsum />
      <Grocery />
      <ColorG />
    </>
  );
};

export default Home;
