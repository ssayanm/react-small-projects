import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SidebarModal from "./pages/SidebarModal.js";
import Color from "./pages/Color.js";
import GroceryBud from "./pages/GroceryBud.js";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="sidebar" element={<SidebarModal />} />
        <Route exact path="color" element={<Color />} />
        <Route exact path="grocery" element={<GroceryBud />} />
      </Routes>
    </Router>
  );
};

export default App;
