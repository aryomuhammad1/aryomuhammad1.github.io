import htmlPng from "../assets/html.png";
import javascriptPng from "../assets/javascript.png";
import cssPng from "../assets/css.png";
import reactPng from "../assets/react.png";
import reduxPng from "../assets/redux.png";
import nextjsPng from "../assets/nextjs.png";
import sassPng from "../assets/sass.png";
import tailwindcssPng from "../assets/tailwindcss.png";

import hoobankPng from "../assets/hoobank.png";
import bengkelOnlinePng from "../assets/bengkel-online.png";
import introChatAppPng from "../assets/intro-chat-app.png";
import realtorPng from "../assets/realtor.png";

export const skills = [
  {
    id: 0,
    name: "HTML",
    logo: htmlPng,
    bgColor: "bg-orange-600",
  },
  {
    id: 1,
    name: "Javascript",
    logo: javascriptPng,
    bgColor: "bg-yellow-400",
  },
  {
    id: 2,
    name: "CSS",
    logo: cssPng,
    bgColor: "bg-blue-500",
  },
  {
    id: 3,
    name: "React JS",
    logo: reactPng,
    bgColor: "bg-blue-400",
  },
  {
    id: 4,
    name: "Redux",
    logo: reduxPng,
    bgColor: "bg-violet-600",
  },
  {
    id: 5,
    name: "Next JS",
    logo: nextjsPng,
    bgColor: "bg-black",
  },
  {
    id: 6,
    name: "SASS",
    logo: sassPng,
    bgColor: "bg-pink-500",
  },
  {
    id: 7,
    name: "TailwindCSS",
    logo: tailwindcssPng,
    bgColor: "bg-cyan-500",
  },
];

export const projects = [
  {
    id: 0,
    title: "Realtor",
    description:
      "An incredibly simple real estate website, built to practice Next JS and ChakraUI.",
    img: realtorPng,
    github: "https://github.com/aryomuhammad1/RealEstateWebApp",
    liveSite: "https://realtor-one-delta.vercel.app/",
  },
  {
    id: 1,
    title: "Intro Chat App",
    description:
      "A web-based chat application with simple feature and realtime interactivity, built to practice React JS and SASS.",
    img: introChatAppPng,
    github: "https://github.com/aryomuhammad1/IntroChatApp",
    liveSite: "https://intro-chat-app-9a8c3.web.app/",
  },
  {
    id: 2,
    title: "HooBank",
    description:
      "A modern bank landing page with beautiful design, built to practice React JS and TailwindCSS.",
    img: hoobankPng,
    github: "https://github.com/aryomuhammad1/ModernBankApp",
    liveSite: "https://modernhoobank1.netlify.app/",
  },
  {
    id: 3,
    title: "Bengkel Online",
    description:
      "A progressive web app-based application for finding the nearest repair shop location and calling a mechanic. Built using CSS, Javascript, Mapbox, Geolocation, Turf JS and Firebase.",
    img: bengkelOnlinePng,
    github: "https://github.com/aryomuhammad1/BengkelOnlineApp",
    liveSite: "https://aplikasi-bengkel-online.web.app/",
  },
];
