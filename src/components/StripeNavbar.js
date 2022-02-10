import React from "react";
import logo from "../logostripe.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const StripeNavbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("stripelink-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="stripenav" onMouseOver={handleSubmenu}>
      <div className="stripenav-center">
        <div className="stripenav-header">
          <a href="/">
            <img src={logo} className="stripenav-logo" alt="" />
          </a>
          <button className="stripebtn stripetoggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="stripenav-links">
          <li>
            <button className="stripelink-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="stripelink-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="stripelink-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
          <li>
            <button className="stripelink-btn" onMouseOver={displaySubmenu}>
              flowers
            </button>
          </li>
        </ul>
        <button className="stripebtn stripesignin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default StripeNavbar;
