import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context.js";
import sublinks from "../data/stripedata";

const StripeSidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div
      className={`${
        isSidebarOpen ? "stripesidebar-wrapper show" : "stripesidebar-wrapper"
      }`}
    >
      <aside className="stripesidebar">
        <button className="stripeclose-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="stripesidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="stripesidebar-sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default StripeSidebar;
