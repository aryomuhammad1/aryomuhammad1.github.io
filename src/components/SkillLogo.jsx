import React, { useState } from "react";

const SkillLogo = ({ name, logo, bgColor }) => {
  const [showName, setShowName] = useState(false);

  return (
    <div
      className={showName && `w-[50px] relative`}
      onMouseEnter={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
    >
      <img
        src={logo}
        alt="react"
        className={`sm:h-[28px] xs:h-[26px] h-[24px] ${
          showName && `scale-[1.7] mt-0 mr-auto ml-auto mb-0`
        }`}
      />
      {showName && (
        <div
          className={`rounded-xl text-center absolute w-[110px] top-[200%] left-[50%] translate-x-[-50%] px-2 py-0.5 ${bgColor}`}
        >
          <p className="text-white w-[100%]">{name}</p>
        </div>
      )}
    </div>
  );
};

export default SkillLogo;
