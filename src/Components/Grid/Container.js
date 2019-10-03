import React from "react";

export const Container = ({ fluid, classname, children }) =>
  <div className={classname ? classname + ` container${fluid ? "-fluid" : ""}` : `container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;