import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SidebarModal from "./pages/SidebarModal.js";
import Color from "./pages/Color.js";
import GroceryBud from "./pages/GroceryBud.js";
import Stripe from "./pages/Stripe";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="sidebar" element={<SidebarModal />} />
        <Route exact path="color" element={<Color />} />
        <Route exact path="grocery" element={<GroceryBud />} />
        <Route exact path="stripe" element={<Stripe />} />
        <Route exact path="cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
