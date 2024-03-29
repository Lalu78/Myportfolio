import React from 'react';

import Bar from './Bar';
import { motion } from 'framer-motion'
import { tools, languages } from './data/resume_data'
import Skillcard from "./Skillcard";
import skills from "./data/about_data";


const Resume = () => {

    const resume_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="container resume"

            variants={resume_variants}
            initial="hidden"
            animate="visible"
            exit="exit"

        >
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        Graduation
                        </h5>
                        <p className="resume-card__name">
                         Bachelor Of Engineering In <strong>Information Technology</strong> (2016-2020)
                        </p>
                        <p><strong>College:-</strong> Lakshmi Narain College of Technology,Bhopal</p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        12th
                        </h5>
                        <p className="resume-card__name">
                        PCM (2016)
                        </p>
                        <p><strong>College / School:-</strong> MLSM College Darbhanga, Bihar</p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        10th
                        </h5>
                        <p className="resume-card__name">
                        All Common subjects  (2013)
                        </p>
                        <p><strong>College / School:-</strong> MRRP High School Bhatchaura, Bihar </p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        Full Stack Developer
                        </h5>
                        <p className="resume-card__name">
                        Napses Technologies Pvt Ltd.(From 2021 to Present)
                        </p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Intern
                        </h5>
                        <p className="resume-card__name">
                            ITE(2020)
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Languages and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
             <div className="container about__container">
        <h6 className="about__heading">What I offer</h6>
        <div className="row">
          {skills.map((skill) => (
            <Skillcard skill={skill} />
          ))}
        </div>
      </div> 
        </motion.div>
    );
};

export default Resume;