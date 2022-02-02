import React, { useEffect } from "react";

const GroceryAlert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list, removeAlert]);
  return <p className={`galert galert-${type}`}>{msg}</p>;
};

export default GroceryAlert;
