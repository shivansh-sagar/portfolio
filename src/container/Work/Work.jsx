import React, { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Appwrap , MotionWrap} from '../../wrapper'
// import { images } from '../../constants';
import './Work.scss';
import { workSet } from '../../assets/data/workSet';


const Work = () => {
  
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  
  
  // const handleWorkFilter = (item) => {
  // }
  // const [activeFilter, setActiveFilter] = useState('All')// const [works, setWorks] = useState([])
  const filterWork = workSet;


  return (
    <>
      <h2 className='head-text'>My Creative <span>Portfolio </span>Section</h2>
      {/* <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS','All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}>
            {item}
          </div>
        ))}
      </div> */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work_portfolio'
        >
       
      {/* <hr className='w-75 center' /> */}

        {filterWork.map((item,index) => (
            <div className="app__work-item app_flex"
            key={index}>
              
            <div className='app__work-img app__flex'>
              <img src={item.img} alt="work.name" />
              
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__Work-hover app__flex'
              >
                <a href={item.url}>
                  <motion.div
                  whileInView={{scale:[0,1]}}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'>
                      <AiFillEye />
                    </motion.div>
                </a>
                <a href={item.github}>
                  <motion.div
                  whileInView={{scale:[0,1]}}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'>
                      <AiFillGithub />
                    </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className='bold-text'>{item.name}</h4>
              <p className='app__work-tag'>{item.tag}</p>
              
              <p className='p-text'style={{ marginTop:10}} >{item.description}</p>
            </div>
          </div>
         
        ))}
      </motion.div>
    </>
  )
}

export default Appwrap(Work, 'work','red');