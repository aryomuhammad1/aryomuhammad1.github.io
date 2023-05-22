import React from "react";
import styles from "../style";
import ProjectCard from "./ProjectCard";
import ParticleWrapper from "./ParticleWrapper";
import SkillLogo from "./SkillLogo";
import { skills, projects } from "../constant";
import "animate.css";
import locationPng from "../assets/location2.png";

function Works() {
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
          I am a front-end developer who loves learning and has a great desire
          for knowledge. I am curious, takes risks, and not afraid of failure.
          My ability to collaborate, communicate effectively, and support others
          can contribute to a positive and productive environment.
        </p>
        <div
          className={`${styles.flexCenter} gap-3 shadow-custom rounded-full px-4 py-3 xs:px-10 xs:py-3 mt-6 z-[5]`}
        >
          <h3
            className={`font-bold sm:text-[20px] xs:text-[18px] text-[14px] text-prim`}
          >
            Skills :
          </h3>
          <div className={`flex  flex-1 flex-wrap gap-2`}>
            {skills.map((skill) => {
              return (
                <SkillLogo
                  key={skill.id}
                  name={skill.name}
                  logo={skill.logo}
                  bgColor={skill.bgColor}
                />
              );
            })}
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
      </div>
    </section>
  );
}

export default Works;
