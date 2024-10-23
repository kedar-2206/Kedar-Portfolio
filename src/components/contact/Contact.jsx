import React, { useRef } from 'react';
import "./contact.scss";
import { motion } from 'framer-motion';
import ScrollToTop from "react-scroll-to-top";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const isDesktop = window.matchMedia("(min-width: 1366px)").matches

const variants= isDesktop && {
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildern: 0.1
        }
    }
}

const formAnimation= isDesktop && {
    initial:{
        opacity:0
    },
    animate:{
        opacity:1,
        transition:{
            delay:1,
            duration:1,
        }
    }
}

const notifySuccess = () => toast.success("Success Notification!");


function Contact() {

    const ref=useRef()

    // const isInView=useInView(ref,{margin:"-100px"})

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    notifySuccess();

    emailjs
      .sendForm('service_jvpfbfo', 'template_1ps94fa', form.current, {
        publicKey: 'NBeWKDeN8UkoE50eC',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    form.current.reset();
  };

  

  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate" ref={ref}>
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let's work together!</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>kedar2206@outlook.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>Concord, California</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>+1 (925) 914-5622</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <motion.form 
            variants={formAnimation} 
            initial="initial" 
            whileInView="animate"
            ref={form} 
            onSubmit={sendEmail}
            >
                <input type="text" placeholder='Name' name='from_name' required />
                <input type="email" placeholder='Email' name='from_email' required />
                <textarea rows={8} placeholder='Message' name='message'></textarea>
                <button>Submit</button>
                <ToastContainer />
            </motion.form>
        </div>
        <ScrollToTop smooth style={{ backgroundColor: 'purple', color: 'white' }}/>
        
    </motion.div>
    
  )
}

export default Contact