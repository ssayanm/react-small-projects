import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const StripeSubmenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext();

  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2");

    const submenu = container.current;
    const { center, bottom } = location;

    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    console.log(links);
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [page, location, links]);

  return (
    <aside
      className={`${isSubmenuOpen ? "stripesubmenu show" : "stripesubmenu"}`}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`stripesubmenu-center ${columns}`}>
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
      </section>
    </aside>
  );
};

export default StripeSubmenu;
