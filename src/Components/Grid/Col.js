import React from "react";

export const Col = ({ size, classname, id, children }) =>
  <div className={ classname ? "col-" + size + " " + classname : size.split(" ").map(size => "col-" + size).join(" ")} id={id}>
    {children}
  </div>;