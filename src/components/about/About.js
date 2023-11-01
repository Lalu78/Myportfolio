import React from "react";

import Skillcard from "./../Skillcard";
import { motion } from "framer-motion";
import skills from "./../data/about_data";
import "./about.css";

const About = () => {
  const about_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="about"
      variants={about_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
   <div className="about1">
   <h6 className="about__intro">
        I describe myself as someone who's persistant, a quick learner and loves
        problem solving by using simple and scalable solutions.
      </h6>
       <ul>
        <li><strong>Currently working At:-</strong> Napses Technologies Pvt Ltd. Bangalore </li>
        <li> <strong>D.O.B:-</strong>  16/05/1998</li>
        <li><strong>BG:-</strong>  B+</li>
        <li><strong> Height:-</strong> 5.6 ″ </li>
        <li> <strong>Complexion:-</strong>  Fair</li>
        <li><strong>Caste:- </strong> Dhanuk</li>
        <li><strong>Languages Known :-</strong> English, Hindi & Maithili </li>
        <li><strong>Hobbies:-</strong> Playing Cricket, Reading books & Trevelling</li>
        <strong>Family details</strong>
        <li><strong>Father Name :-</strong> Mr. Rashlal Mandal</li>
        <li><strong>Mother Name :-</strong> Mrs. Kamla Devi</li>
        <li><strong>Uncle Name :-</strong> Mr. Rajeev Mandal</li>
        <strong>Siblings</strong>
        <li><strong> Brother (elder):-</strong> Mr. Ganesh Mandal (General Manager)</li>
        <li><strong>Sisters (4, (3 elder),(1 younger)):-</strong> All married </li>
        <li><strong>Permanent Address :-</strong> Village Baruar, Babubarhi, Madhubani, Bihar,847228 </li>

      
       </ul>
   </div>
      
    
    </motion.div>
  );
};

export default About;
