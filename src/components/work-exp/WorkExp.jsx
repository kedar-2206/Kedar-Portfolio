import React from 'react';
import "./work-exp.scss";
import { motion } from 'framer-motion';
import {internexperience, workexperience} from "../../utils/workExperience"

const isDesktop = window.matchMedia("(min-width: 1280px)").matches

const WorkExpCard = ({item}) => {

    const rotateVariants = isDesktop && {
        initial:{
            rotateY:0,
            opacity:0,
        },
        animate:{
            rotateY:360,
            opacity:1,
            transition:{
                duration:2,
                staggerChildren: 0.1
            },
        },
    }

    const cardVariants = isDesktop && {
        initial:{
            x:500,
            opacity:0        
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:2,
                staggerChildren: 0.1
            },
        },
    }

    


    return <div className='card-container'>
        <motion.div className="card-img" variants={rotateVariants} initial="initial" whileInView="animate" whileHover={{scale:1.2}}>
            <img src={item.image} alt="" />
        </motion.div>

        <motion.div className='work-exp-card' variants={cardVariants} initial="initial" whileInView="animate" whileHover={{background: "lightgray", color:"black"}}>
            <h6>{item.title}</h6>

            <div className="work-duration">{item.date}</div>

            <ul>
                {item.responsibilities.map((item)=>(
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </motion.div>
    </div>
}

function WorkExp({type}) {

    const titleVariants = {
        initial:{
            y:-100,
            opacity:0        
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                delay:1,
                duration:1,
            },
        },
    }  
  
  return (
    <div className='work-exp-container'>
        <motion.h5 variants={titleVariants} initial="initial" animate="animate">{type === "fulltime" ? "Work Experience: Full Time" : "Work Experience: Internship"}</motion.h5>
        <div className="work-exp-content">
            {type === "fulltime" ?            
                workexperience.map((item)=>(            
                    <WorkExpCard key={item.id} item={item}/>
                )) :
                internexperience.map((item)=>(            
                    <WorkExpCard key={item.id} item={item}/>
                ))
            } 
        </div>
    </div>
  )
}

export default WorkExp