import React from "react";

function Div() {
  const [scalle3d, setScale3d] = React.useState("1");

  console.log("scalle3d : ", scalle3d);

  React.useEffect(() => {
    function scale() {
      const scroll = window.scrollY / 1000;
      const newWidth = 1 + scroll;

      console.log("newWidth : ", newWidth);

      setScale3d(`${newWidth}`);
    }

    function onscroll() {
      requestAnimationFrame(scale);
    }

    window.addEventListener("scroll", onscroll);

    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  });

  return (
    <div
      className={` absolute z-[6] bg-darkSecond`}
      style={{
        width: `50%`,
        height: `200px`,
        transform: `scale3d(${scalle3d},${scalle3d},1)`,
      }}
    >
      <p className="text-[8px]">cek</p>
    </div>
  );
}

export default Div;
