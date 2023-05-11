import React from "react";
import Particle from "./Particle";

function ParticleWrapper() {
  const [scale3d, setScale3d] = React.useState(1);
  const [opacity, setOpacity] = React.useState(1);
  const frontWrapper = React.useRef(null);
  const backWrapper = React.useRef(null);

  console.log("scale3d : ", scale3d);

  React.useEffect(() => {
    function scale() {
      const scroll = window.scrollY / 600;
      const newWidth = 1 + scroll;
      const newOpacity = 1 - scroll / 5;
      console.log("newWidth : ", newWidth);
      console.log("newOpacity : ", newOpacity);

      setScale3d(newWidth);
      setOpacity(newOpacity);
    }

    function onscroll() {
      requestAnimationFrame(scale);
    }

    window.addEventListener("scroll", onscroll);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", onscroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function handleMouseMove(e) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const sFront = 150;
    const sBack = 400;
    const x = e.clientX;
    const y = e.clientY;

    frontWrapper.current.style.transform = `translate(${
      0.01 + (x - w) * (0.01 - 0.005)
    }%, ${0.1 + (y - h) * (0.01 - 0.002)}%)`;
    backWrapper.current.style.transform = `translate(${
      0.01 + (x - w) * (0.01 - 0.008)
    }%, ${0.1 + (y - h) * (0.01 - 0.005)}%)`;
  }

  return (
    <div
      className="wrapper h-[360px] top-40 left-0 right-0 absolute z-[0] preserve-3d"
      style={{
        transform: `scale3d(${scale3d}, ${scale3d}, 1)`,
      }}
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <div
        className="sub-wrapper h-[360px] top-0 left-0 right-0 absolute z-[2]"
        // style={{
        //   transform: `translate(${translateFront.x}, ${translateFront.y})`,
        // }}
        ref={frontWrapper}
      >
        <Particle
          rotateZ={`-26deg`}
          opacity={opacity - 0.5}
          className={"min-w-[36px] min-h-[36px] bottom-28 left-28"}
        />
        <Particle
          rotateZ={`20deg`}
          opacity={opacity - 0.78}
          className={"min-w-[28px] min-h-[28px] top-12 right-48"}
        />
      </div>
      <div
        className="sub-wrapper h-[360px] top-0 left-0 right-0 absolute z-[1]"
        // style={{
        //   transform: `translate(${translateBack.x}, ${translateBack.y})`,
        // }}
        ref={backWrapper}
      >
        <Particle
          rotateZ={`25deg`}
          opacity={opacity - 0.6}
          className={"min-w-[15px] min-h-[15px] top-12 left-16"}
        />

        <Particle
          rotateZ={`20deg`}
          opacity={opacity - 0.75}
          className={"min-w-[20px] min-h-[20px] top-6 left-80"}
        />
        <Particle
          rotateZ={`20deg`}
          opacity={opacity - 0.6}
          className={"min-w-[15px] min-h-[15px] bottom-32 left-72"}
        />

        <Particle
          rotateZ={`-26deg`}
          opacity={opacity - 0.8}
          className={"min-w-[15px] min-h-[15px] bottom-16 right-64"}
        />
        <Particle
          rotateZ={`20deg`}
          opacity={opacity - 0.8}
          className={"min-w-[15px] min-h-[15px] top-16 right-6"}
        />
        <Particle
          rotateZ={`-26deg`}
          opacity={opacity - 0.8}
          className={"min-w-[18px] min-h-[18px] bottom-32 right-20"}
        />
      </div>
    </div>
  );
}

export default ParticleWrapper;
