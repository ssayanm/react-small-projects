import SidebarModal from "./components/SidebarModal.js";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="sidebar" element={<SidebarModal />} />
      </Routes>
    </Router>
  );
};

export default App;
