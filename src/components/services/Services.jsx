import React, { useRef } from 'react';
import "./services.scss";
import {animate, motion, useInView} from "framer-motion";

const isDesktop = window.matchMedia("(min-width: 1366px)").matches

const variants= isDesktop && {
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    },
};

function Services() {

  const ref = useRef()

  const isInView = useInView(ref,{margin: "-100px"})
  return (
    <motion.div 
        className='services' 
        variants={variants} 
        initial="initial"
        // animate="animate"
        // whileInView="animate"
        ref={ref}
        animate={isInView && "animate"}
    >
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on helping your brand grow 
                <br /> and move forward      
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color: "orange"}}>For your</motion.b> Business
                </h1>
                <button>What we do?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, itaque! Doloremque facilis veniam deserunt unde alias architecto aliquam commodi cupiditate a aperiam. Qui tempore autem quisquam consequuntur commodi expedita velit.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, itaque! Doloremque facilis veniam deserunt unde alias architecto aliquam commodi cupiditate a aperiam. Qui tempore autem quisquam consequuntur commodi expedita velit.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, itaque! Doloremque facilis veniam deserunt unde alias architecto aliquam commodi cupiditate a aperiam. Qui tempore autem quisquam consequuntur commodi expedita velit.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, itaque! Doloremque facilis veniam deserunt unde alias architecto aliquam commodi cupiditate a aperiam. Qui tempore autem quisquam consequuntur commodi expedita velit.
                </p>
                <button whileHover={{color:"black"}}>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services