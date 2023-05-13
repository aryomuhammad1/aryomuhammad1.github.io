import htmlPng from "../assets/html.png";
import javascriptPng from "../assets/javascript.png";
import cssPng from "../assets/css.png";
import reactPng from "../assets/react.png";
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
    name: "Next JS",
    logo: nextjsPng,
    bgColor: "bg-black",
  },
  {
    id: 5,
    name: "SASS",
    logo: sassPng,
    bgColor: "bg-pink-500",
  },
  {
    id: 6,
    name: "TailwindCSS",
    logo: tailwindcssPng,
    bgColor: "bg-cyan-500",
  },
];

export const projects = [
  {
    id: 0,
    title: "Bengkel Online",
    description:
      "Progressive web app based application to find the nearest repair shop location and call a mechanic. Built using css, javascript, mapbox api, geolocation api, turf js and firebase.",
    img: bengkelOnlinePng,
    github: "https://github.com/aryomuhammad1/ModernBankApp",
    liveSite: "",
  },
  {
    id: 1,
    title: "Intro Chat App",
    description:
      "Aplikasi chat sederhana yang dibangun untuk praktik menggunakan react js, sass dan firebase.",
    img: introChatAppPng,
    github: "https://github.com/aryomuhammad1/IntroChatApp",
    liveSite: "",
  },
  {
    id: 2,
    title: "HooBank",
    description:
      "Sebuah landing page bank modern yang dibangun untuk praktik menggunakan react js dan tailwindcss.",
    img: hoobankPng,
    github: "https://github.com/aryomuhammad1/ModernBankApp",
    liveSite: "",
  },
  {
    id: 3,
    title: "Realtor",
    description:
      "Sebuah landing page bank modern yang dibangun untuk praktik menggunakan react js dan tailwindcss.",
    img: realtorPng,
    github: "https://github.com/aryomuhammad1/RealEstateWebApp",
    liveSite: "",
  },
];
