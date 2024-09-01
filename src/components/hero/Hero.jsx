import React from 'react';
import "./hero.scss";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { PiMouseSimpleBold } from "react-icons/pi";

const textVariants = {
    initial:{
        x:-500,
        opacity: 0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren: 0.1
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}

const sliderVariants = {
    initial:{
        x:0,        
    },
    animate:{
        x:"-900%",
        transition:{
            duration:15,
            delay:2,
            repeaType:"mirror",
            repeat: Infinity
        },
    },
}

const imageVariants = {
    initial:{
        x:500,
        opacity:0        
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:5,
            staggerChildren: 0.1
        },
    },
}
// https://docs.google.com/document/d/1O0NchNmqdLq0FvWDdlJrRr96s1s4XZW2ckPTxkcBIXA/edit?usp=sharing_eip&invite=CKqupYsN&ts=66d2b695
const handleDownload = () => {
    // Google Docs document ID
    const googleDocsId = "1O0NchNmqdLq0FvWDdlJrRr96s1s4XZW2ckPTxkcBIXA";
    const downloadUrl = `https://docs.google.com/document/d/${googleDocsId}/export?format=pdf`;

    // Create an invisible link element
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Resume.pdf";

    // Append the link to the document and trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up by removing the link element after the download
    document.body.removeChild(link);
  };

function Hero() {
  return (
    <motion.div className='hero'>
        <motion.div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>Kedar Rammohan</motion.h2>
                <motion.h1 variants={textVariants}>Full Stack Web Developer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>
                        {/* <a href="#portfolio-start">See the latest works</a> */}
                        <Link to="portfolio-start" smooth={true} duration={1000}>
                            See the latest works
                        </Link>
                    </motion.button>
                    <motion.button variants={textVariants}>
                        <Link to="Contact" smooth={true} duration={1000}>
                            Contact Me                            
                        </Link>
                    </motion.button>
                    <motion.button variants={textVariants} onClick={handleDownload}>                        
                        Download Resume                     
                    </motion.button>
                </motion.div>
                <motion.div variants={textVariants} animate="scrollButton">
                {/* src="./scroll.png" alt="No Image" */}
                    <PiMouseSimpleBold size={60}/>
                </motion.div>
            </motion.div>
        </motion.div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            PASSIONATE SOFTWARE DEVELOPER
        </motion.div>
        <motion.div className="imageContainer" variants={imageVariants} initial="initial" animate="animate">
            <img src={require('../../assets/PP.png')} alt="" />
        </motion.div>
    </motion.div>
  )
}

export default Hero