import React, { useState } from "react";

const SkillLogo = ({ name, logo, bgColor }) => {
  const [showName, setShowName] = useState(false);

  return (
    <div className="relative">
      <img
        src={logo}
        alt="react"
        className={`sm:h-[28px] xs:h-[26px] h-[24px] transition ease-in-out duration-[400ms] hover:scale-[1.6] hover:mt-0 hover:mr-auto hover:ml-auto hover:mb-0`}
        onMouseEnter={() => setShowName(true)}
        onMouseLeave={() => setShowName(false)}
      />
      <div
        className={`${
          showName && `opacity-100`
        } transition ease-in-out duration-[400ms] opacity-0 rounded-xl text-center absolute w-[110px] top-[200%] left-[50%] translate-x-[-50%] px-2 py-0.5 ${bgColor}`}
      >
        <p className="text-white w-[100%]">{name}</p>
      </div>
    </div>
  );
};

export default SkillLogo;
