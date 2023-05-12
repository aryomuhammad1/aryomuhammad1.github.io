import React from "react";
import styles from "../style";
import ProjectCard from "./ProjectCard";
import ParticleWrapper from "./ParticleWrapper";
import projects from "../constant";
import "animate.css";
import locationPng from "../assets/location2.png";

function Works() {
  console.log("projects : ", projects);
  return (
    <section
      className={`animate__animated animate__fadeIn animate__slow 
	  			flex justify-start flex-col gap-6 
	            pt-64 sm:w-[700px] md:w-[900px] text-center relative`}
    >
      <ParticleWrapper />
      <div className={`${styles.flexCenter} flex-col gap-6 mb-20`}>
        <h1 className={`${styles.heading} text-gradient z-[5]`}>
          Hi, I'm Aryo.
        </h1>
        <div className={`${styles.flexCenter} gap-1 z-[5]`}>
          <img src={locationPng} alt="location-marker" className="h-[24px]" />
          <p className={`${styles.paragraph}`}>Bekasi, West Java</p>
        </div>
        <p
          className={`${styles.paragraph} text-gradient tracking-wide w-[60%] leading-[26.8px] z-[5]`}
        >
          I'm currently at Snap, where I design experiences around finding and
          using AR Lenses on Snapchat.
        </p>
        <div
          className={`${styles.flexCenter} gap-2 shadow-custom rounded-full px-4 py-3 xs:px-10 xs:py-3 mt-6 z-[5]`}
        >
          <h3
            className={`font-bold sm:text-[20px] xs:text-[18px] text-[14px] text-prim`}
          >
            Tech stack :
          </h3>
          <div className={`flex  flex-1 flex-wrap gap-1`}>
            <img
              src="src/assets/html.png"
              alt="html"
              className="sm:h-[28px] xs:h-[26px] h-[24px]"
            />
            <img
              src="src/assets/javascript.png"
              alt="javascript"
              className="sm:h-[28px] xs:h-[26px] h-[24px]"
            />
            <img
              src="src/assets/css.png"
              alt="css"
              className="sm:h-[28px] xs:h-[26px] h-[24px]"
            />
            <img
              src="src/assets/react.png"
              alt="react"
              className="sm:h-[28px] xs:h-[26px] h-[24px]"
            />
            <img
              src="src/assets/nextjs.png"
              alt="nextjs"
              className="sm:h-[28px] xs:h-[26px] h-[24px]"
            />
            <img
              src="src/assets/sass.png"
              alt="sass"
              className="sm:h-[28px] xs:h-[26px] h-[24px]"
            />
            <img
              src="src/assets/tailwindcss.png"
              alt="tailwindcss"
              className="sm:h-[28px] xs:h-[26px] h-[24px]"
            />
          </div>
        </div>
      </div>
      <div>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              img={project.img}
              github={project.github}
              liveSite={project.liveSite}
            />
          );
        })}

        {/* <ProjectCard
          title={"Bengkel Online"}
          description={"Find the nearest repair shop for your motorcycle."}
          img={"src/assets/hoobank.png"}
        />
        <ProjectCard
          title={"Bengkel Online"}
          description={"Find the nearest repair shop for your motorcycle."}
          img={"src/assets/hoobank.png"}
        />
        <ProjectCard
          title={"Bengkel Online"}
          description={"Find the nearest repair shop for your motorcycle."}
          img={"src/assets/hoobank.png"}
        /> */}
      </div>
    </section>
  );
}

export default Works;
