import React from 'react';
import "./skillcard.scss";



function SkillCard({title, iconUrl, isActive, onClick}) {
  return (
    <div className={`skills-card ${isActive ? "active" : ""}`}
      onClick={()=>onClick()}
    >
      <span>{title}</span>

    </div>
  )
}

export default SkillCard