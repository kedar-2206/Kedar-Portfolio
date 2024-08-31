import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


// #
function Navbar() {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span 
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{duration:1}}>
                &lt;Kedar /&gt;
            </motion.span>
            <div className="social">
                <a href="https://www.facebook.com/share/v8ZfnevHbpdXUZ2x/?mibextid=qi2Omg">
                    <FaFacebookSquare size={30} />
                </a>
                <a href="https://www.instagram.com/kedar_kedi?igsh=a24yZng4eWJpbHRu">
                    <FaInstagramSquare size={30} />
                </a>
                <a href="https://www.linkedin.com/in/kedar-rammohan-8998ab155?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <FaLinkedin size={30} />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar