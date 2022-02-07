import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <div className="sidebar-modal">
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn-sm">
        show modal
      </button>
    </div>
  );
};

export default Home;
