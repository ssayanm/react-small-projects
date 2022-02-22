import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SidebarModal from "./pages/SidebarModal.js";
import Color from "./pages/Color.js";
import GroceryBud from "./pages/GroceryBud.js";
import Stripe from "./pages/Stripe";
import Cart from "./pages/Cart";
import HackerNews from "./pages/HackerNews";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sidebar" element={<SidebarModal />} />
        <Route path="color" element={<Color />} />
        <Route path="grocery" element={<GroceryBud />} />
        <Route path="stripe" element={<Stripe />} />
        <Route path="cart" element={<Cart />} />
        <Route path="hackernews" element={<HackerNews />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
