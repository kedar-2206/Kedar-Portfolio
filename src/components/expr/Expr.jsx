import React, { useRef } from 'react';
import "./expr.scss";
import Slider from 'react-slick';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const workexperience=[
    {
        id:1,
        title: "Senior Frontend Developer",
        date: "JAN 2022 - Present",
        responsibilities:[
            "Developed and maintained client websites",
            "Implemented advanced CSS animations",
            "Imporoved the response time by optimizing the code",
            "Conducted Code reviews"
        ],
    },
    {
        id:2,
        title: "Junior Frontend Developer",
        date: "JAN 2022 - Present",
        responsibilities:[
            "Developed and maintained client websites",
            "Implemented advanced CSS animations",
            "Imporoved the response time by optimizing the code",
            "Conducted Code reviews"
        ],
    },
    {
        id:3,
        title: "Very Junior Frontend Developer",
        date: "JAN 2022 - Present",
        responsibilities:[
            "Developed and maintained client websites",
            "Implemented advanced CSS animations",
            "Imporoved the response time by optimizing the code",
            "Conducted Code reviews"
        ],
    },
]

const Single = ({item}) => {   
    
    return <div className='work-exp-card'>
        <h6>{item.title}</h6>

        <div className="work-duration">{item.date}</div>

        <ul>
            {item.responsibilities.map((item)=>(
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
};

function Expr() {

    const sliderRef = useRef();

    const settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:2,
        slidesToScroll:1,
        arrows:true,
        responsive:[
            {
                breakpoint:738,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ],
    };

    const slideRight = ()=>{
        sliderRef.current.slickNext();
    };

    const slideLeft = ()=>{
        sliderRef.current.slickPrev();
    };
    
  return (
    <div className='expr-container'>
        <h5>Work Experience</h5>
        <div className="expr-content">
            <div className="arrow-right" onClick={slideRight}>
                <FaChevronRight />
            </div>

            <div className="arrow-left" onClick={slideLeft}>
                <FaChevronLeft />
            </div>
            <Slider ref={sliderRef} {...settings}>
                {workexperience.map((item)=>(            
                    <Single key={item.id} item={item}/>
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default Expr