import React from "react";

import api from "../../assets/icons/api.svg";
import backend from "../../assets/icons/backend.svg";
import algo from "../../assets/icons/algo.svg";
import computer from "../../assets/icons/computer.svg";
import repair from "../../assets/icons/repair.svg";
import puzzle from "../../assets/icons/puzzle.svg";

const skills = [
  {
    icon: computer,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using HTML, CSS and React.js",
  },
  {
    icon: repair,
    title: "Backend  Development",
    about: "handle database, server, api using and MongoDB",
  },
  {
    icon: api,
    title: "API Development",
    about: ["I can develop robust REST API "],
  },
  {
    icon: algo,
    title: "Competitive Coder",
    about: "a daily problem solver in HackerRank and Leetcode",
  },
  {
    icon: puzzle,
    title: "UI/UX designer",
    about:
      "minimalistic user interface designer using React Js and Material UI",
  },
  {
    icon: computer,
    title: "Graphics Design",
    about:
      "I can build a beautiful and scalable Graphics using Photoshop and illustrator",
  },
];

export default skills;
