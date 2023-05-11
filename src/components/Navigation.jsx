import React from "react";
import styles from "../style";
import "animate.css";

const Navigation = ({ active, setActive }) => {
  const navRef = React.useRef(null);

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  function changeState(e) {
    const isChecked = e.target.checked;
    setActive(isChecked ? "me" : "works");
  }

  function handleMouseMove(e) {
    const sNav = 420;
    const x = e.clientX;
    const y = e.clientY;

    navRef.current.style.transform = `translate(${x / sNav}%, ${y / sNav}%)`;
  }

  return (
    <div className="top-[30px] z-[5] fixed animate__animated animate__bounceInDown animate__slow ">
      <label className="switch " ref={navRef}>
        <input type="checkbox" onClick={changeState} />
        <span className="slider round bg-second flex shadow-custom">
          <div
            className={`${styles.flexCenter} w-[50%] h-[52px] top-1 bottom-1 left-1 rounded-[34px] relative`}
          >
            <p
              className={`${styles.paragraph} ${
                active === "works" ? "font-semibold text-[20px]" : ""
              }`}
            >
              Works
            </p>
          </div>
          <div
            className={`${styles.flexCenter} w-[50%] h-[52px] top-1 bottom-1 right-1 rounded-[34px] relative`}
          >
            <p
              className={`${styles.paragraph}  ${
                active === "me" ? "font-semibold text-[20px]" : ""
              }`}
            >
              Me
            </p>
          </div>
        </span>
      </label>
    </div>
  );
};

export default Navigation;
