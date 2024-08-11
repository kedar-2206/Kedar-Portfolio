import React, { useState } from 'react'
import "./skills.scss";
import { SKILLS } from '../../utils/skilldata';
import SkillCard from './skillcard/SkillCard';
import SkillsInfoCard from './skillsinfocard/SkillsInfoCard';
import {motion} from "framer-motion";

function Skills() {

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])

  

  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  };

  const titleVariants = {
    initial:{
        y:-100,
        opacity:0        
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:2,
        },
    },
  }  

  const cardVariantsLeft = (index) => ({
    initial:{
        x:-100,
        opacity:0        
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:2,
            // staggerChildren: 0.1,
            delay: index * 0.3,
        },
    },
  });

  const cardVariantsRight = {
    initial:{
        x:100,
        opacity:0        
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:2,
            staggerChildren: 0.2,
        },
    },
  }

  

  return (
    <section className='skills-container'>
        <motion.h5 variants={titleVariants} initial="initial" whileInView="animate">Technical Proficiency</motion.h5>

        <motion.div className="skills-content">
          <motion.div className="skills">
            {SKILLS.map((item, index) => (
              <motion.div key={item.title} variants={cardVariantsLeft(index)} initial="initial" whileInView="animate">
                <SkillCard
                 
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => {
                  handleSelectedSkill(item);
                }}
                />
              </motion.div>
            ))}
              
          </motion.div>
          <motion.div className="skills-info" variants={cardVariantsRight} initial="initial" whileInView="animate">
            <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
            />
          </motion.div>
        </motion.div>
    </section>
  )
}

export default Skills