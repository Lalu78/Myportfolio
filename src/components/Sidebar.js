import React from "react";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import mightycoder from "../assets/lalupic.jpeg";
import resume from "../assets/Lalu .pdf";
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
      <div className="sidebar__name"> ER. LALU KUMAR MANDAL </div>
      <div className="sidebar__item sidebar__title"> <strong>Software Developer</strong></div>
      <div className="sidebar__item sidebar__title"> <strong>  ( Exp. 2.5 yr )</strong></div>
      <a href={resume} download="lalu-Boi-Data.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="resume" className="sidebar__icon" />
          Download Boi-Data
        </div>
      </a>
      <figure className="sidebar__social-icons sidebar__item">
        <a href=" https://www.linkedin.com/in/lalulumar78">
          <img
            src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
            alt="linkedin"
            className="linkedin_icon"
          />
        </a>
        <div className="linkedintext">Linkedin</div>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-3" />
          BTM 1st Stage, Bengaluru, Karnataka, 560068, India
        </div>

        <div className="sidebar__item">
         <strong>Gmail:</strong> lalu07442@gmail.com
        </div>
        <div className="sidebar__item">
         <strong>Mobile:</strong>
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
