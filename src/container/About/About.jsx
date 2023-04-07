// import React, {useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import {images} from '../../constants';
import './About.scss';
import { Appwrap} from '../../wrapper';


const abouts = [
  {title: "React Developer", description:'I am a React Developer with a passion for building beautiful and functional mobile application',imgUrl:images.about01},
  {title: "UI/UX Designer", description:'I am a UI/Ux designer and understand the importance of Look and Feel',imgUrl:images.about02},
  {title: "Web Animation", description:'I am Web Animator and i am good at stealing the attraction of the user',imgUrl:images.about03},
  {title: "Frontent Developer", description:'I am a frontend developer and I love to create design which best connected with with the requirement',imgUrl:images.about04}
];

const About = () => {
  
  
  return (
    <>
    <h2 className="head-text">
      I know that <span>Good Design </span><br /> means <span>Good Business</span>
    </h2>
    <div className="app__profiles">
      {abouts.map((about,index) =>(
        <motion.div
        whileInView={{opacity:1}}
        whileHover={{scale:1.1}}
        transition = {{duration:0.5, type:'tween'}}
        className='app__profile-item'
        key={about.title+index}
        >
          <img src={about.imgUrl} alt={about.title} />
          <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
          <p className="p-text" style={{marginTop:10}}>{about.description}</p>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default Appwrap(About, 'about','mgray');