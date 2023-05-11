import React from "react";

const Particle = ({ className, opacity, rotateZ }) => {
  return (
    <div
      className={`${className} absolute inline-block rounded-[7px] bg-prim preserve-3d`}
      style={{ opacity: `${opacity}`, transform: `rotateZ(${rotateZ})` }}
    ></div>
  );
};

export default Particle;
