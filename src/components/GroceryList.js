import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const GroceryList = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="grocery-item" key={id}>
            <p className="gtitle">{title}</p>
            <div className="gbtn-container">
              <button
                type="button"
                className="gedit-btn"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="gdelete-btn"
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default GroceryList;
