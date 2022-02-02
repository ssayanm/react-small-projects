import React, { useState, useEffect } from "react";
import GroceryList from "./GroceryList";
import GroceryAlert from "./GroceryAlert";
import "../styles/grocery.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const Grocery = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="grocery-list">
      <div className="container">
        <div className="title">
          <h2>grocery bud</h2>
          <div className="underline"></div>
        </div>
        <div className="gsection-center">
          <form className="grocery-form" onSubmit={handleSubmit}>
            {alert.show && (
              <GroceryAlert {...alert} removeAlert={showAlert} list={list} />
            )}

            <div className="gform-control">
              <input
                type="text"
                className="grocery"
                placeholder="e.g. eggs"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button type="submit" className="gsubmit-btn">
                {isEditing ? "edit" : "submit"}
              </button>
            </div>
          </form>

          {list.length > 0 && (
            <div className="grocery-container">
              <GroceryList
                items={list}
                removeItem={removeItem}
                editItem={editItem}
              />
              <button className="gclear-btn" onClick={clearList}>
                clear items
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Grocery;
