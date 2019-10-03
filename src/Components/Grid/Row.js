import React from "react";

export const Row = ({ children, id, classname, fluid }) =>
  <div className={ classname ? `row${fluid ? "-fluid": " "}` + classname : `row${fluid ? "-fluid" : ""}`} id={id}>
    {children}
  </div>;