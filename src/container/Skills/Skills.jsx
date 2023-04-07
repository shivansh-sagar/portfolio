import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { Appwrap } from '../../wrapper';
import { images } from '../../constants';
import './Skills.scss';
import { skillSet } from '../../assets/data/skillSet';
import { expSet } from '../../assets/data/expSet';


const Skills = () => {

  const filterskill = skillSet;
  const experience = expSet;
  return (
    <>
      <div id='skill'>
        <h2 className='head-text'>Skills & Experience</h2>
        <div className="app__skills-container">
          <motion.div className='app__skills-list'>
            {filterskill.map((skill, index) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__skills-item app__flex'
                key={index}
              >
                <div className="app__flex" style={{ backgroundColor: skill.bgcolor }}>
                  <img src={skill.img} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>


              </motion.div>
            ))}
          </motion.div>
          <hr />
          <motion.div className='app__skills-exp'>
            {experience.map((exp, index) => (

              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__skills-exp-work'
                data-tip
                data-for={exp.name}
                key={index}>
                <h3 className='app__skills-exp-year'>{exp.year}</h3>
                <h4 className='bold-text'>{exp.name}</h4>
                <p className='p-text'>{exp.company}</p>
                <p className='p-text-desc'>{exp.desc}</p>

              </motion.div>
              // <ReactTooltip
              // id={exp.name}
              // effect="solid"
              // arrowColor="#fff"
              // className='skills-tooltip'>

              //   {exp.desc}
              // </ReactTooltip>
              // </>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

// export default Skills
export default Appwrap(Skills, 'skill', "app__skills-body");