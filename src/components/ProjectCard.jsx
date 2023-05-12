import React from "react";
import styles from "../style";
import arrowPng from "../assets/arrow.png";

function ProjectCard({ title, description, img }) {
  return (
    <div
      className="project-card flex-1 flex md:justify-between md:items-center flex-col md:flex-row 
					bg-second-gradient rounded-[20px] p-5 xs:p-8 sm:p-10 mx-8 xs:mx-16 sm:mx-6 md:mx-0 mb-20 cursor-pointer"
    >
      <div className="mr-10 w-[100%] md:w-[45%] text-left">
        <div className={`flex flex-col `}>
          <h2 className={`${styles.heading2} mb-1`}>{title}</h2>
          <p className={`${styles.paragraph}`}>{description}</p>
        </div>
        <div className="mt-5 flex flex-row gap-2 xs:gap-4 ">
          <a
            href="#"
            className={`${styles.flexCenter} gap-2 project-btn text-[12px] xs:text-[16px] py-2 px-3 xs:py-3 xs:px-5 bg-lightSecond rounded-[10px]`}
          >
            <p className={`text-gradient font-medium`}>Source Code</p>
          </a>
          <a
            href="#"
            className={`${styles.flexCenter} project-btn site-btn flex gap-2.5 text-[12px] xs:text-[16px] py-2 px-3 xs:py-3 xs:px-5 bg-lightSecond rounded-[10px]`}
          >
            <p className="text-gradient font-medium">Live Site</p>
            <img
              src={arrowPng}
              alt="arrow"
              className="xs:w-[20px] xs:h-[20px] w-[14px] h-[14px]"
            />
          </a>
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:w-[50%] rounded-[20px] overflow-hidden">
        <img src={img} alt={title} />
      </div>
    </div>
  );
}

export default ProjectCard;
