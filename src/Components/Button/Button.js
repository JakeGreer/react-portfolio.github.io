import React from "react";
import "./Button.css";

export const Button = ({ classname, children, id, path, handleTabChange, index }) =>
  <button className={classname ? "btn-custom btn " + classname : "btn-custom btn btn-default"} onClick={handleTabChange.bind(this, index)} href={path} id={id}>
    {children}
  </button>;