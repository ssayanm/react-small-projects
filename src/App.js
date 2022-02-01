import ColorG from "./components/ColorG";
import FoodMenu from "./components/FoodMenu";
import LoremIpsum from "./components/LoremIpsum";
import Questions from "./components/Questions";
import Reviews from "./components/Reviews";
import Slider from "./components/Slider";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <>
      <Reviews />
      <Questions />
      <FoodMenu />
      <Tabs />
      <Slider />
      <LoremIpsum />
      <ColorG />
    </>
  );
};

export default App;
