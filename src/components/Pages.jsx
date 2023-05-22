import React from "react";
import About from "./About";
import Works from "./Works";

const Pages = () => {
  //   return <div>{active === "about" ? <About /> : <Works />}</div>;
  return (
    <div>
      <Works />
    </div>
  );
};

export default Pages;
