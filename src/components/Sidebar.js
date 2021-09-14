import React from "react";

import facebook from "../assets/icons/facebook.svg";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import mightycoder from "../assets/lk.jpg";
import resume from "../assets/LALUKUMAR_RESUME.pdf";
import { motion } from "framer-motion";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:lalukumar7771@gmail.com");
  };
  const sidebar_variant = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: 0,

      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name"> LALU KUMAR MANDAL </div>
      <div className="sidebar__item sidebar__title">MERN Stack Developer</div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="resume" className="sidebar__icon" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a href="https://www.facebook.com/lalu.kumar.1441810">
          <img src={facebook} alt="facebook" className="sidebar__icon mr-3" />
        </a>
        <a href=" https://www.linkedin.com/in/lalulumar78">
          <img
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
            alt="linkedin"
            className="sidebar__icon"
          />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a href="https://github.com/Lalu78?tab=repositories">
            <img src={github} alt="github" className="sidebar__icon mr-3" />
            github
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-3" />
          Bangalore, India
        </div>

        <div className="sidebar__item">
          <img
            src="https://image.flaticon.com/icons/png/512/732/732200.png"
            alt="gmail"
            className="sidebar__icon mr-3"
          />
          lalukumar7771@gmail.com
        </div>
        <div className="sidebar__item">
          <img
            src="https://image.flaticon.com/icons/png/512/552/552489.png"
            alt="location"
            className="sidebar__icon mr-3"
          />
          8709794197
        </div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        email me
      </div>
    </motion.div>
  );
};

export default Sidebar;
