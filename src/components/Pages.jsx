import React from "react";
import About from "./About";
import Works from "./Works";

const Pages = ({ active }) => {
  return <div>{active === "me" ? <About /> : <Works />}</div>;
};

export default Pages;
