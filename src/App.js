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
        <Route path="/sidebar" element={<SidebarModal />} />
        <Route path="/color" element={<Color />} />
        <Route path="/grocery" element={<GroceryBud />} />
        <Route path="/stripe" element={<Stripe />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
