import React from 'react'
import "./Achievements.css"
import program_1 from "../../assets/boyssepak.jpg"
import program_2 from "../../assets/girlssepak.jpg"
import program_3 from "../../assets/gvolley.jpg"
import program_4 from "../../assets/girls.jpg"
import program_5 from "../../assets/dasara.jpg"
import program_6 from "../../assets/throwball.jpg"
import program_7 from "../../assets/kabb.jpg"

import program_icon1 from "../../assets/sep.png" 
import program_icon4 from "../../assets/vol.png" 
import program_icon3 from "../../assets/kab.png" 

const Achievements = () => {
  return (
    <div className='achievements'>
        <div className="programs" id="program">
    <div className="program">
    <img src= {program_1} alt=" "/>
    <div className="caption">
        <img src={program_icon1} alt=" "/>
        <p>Boys Sepaktakra</p>

    </div>
    </div>
    <div className="program">
    <img src= {program_2} alt=" "/>
    <div className="caption">
        <img src={program_icon1} alt=" "/>
        <p>Girls Sepaktakra</p>

    </div>
    </div>

    <div className="program">
    <img src= {program_3} alt=" "/>
    <div className="caption">
        <img src={program_icon4} alt=" "/>
        <p>Girls Volleyball</p>

    </div>
    </div>

    <div className="program">
    <img src= {program_4} alt=" "/>
    <div className="caption">
        <img src={program_icon4} alt=" "/>
        <p>Our Girls Team</p>

    </div>
    </div>

    <div className="program">
    <img src= {program_5} alt=" "/>
    <div className="caption">
        <img src={program_icon4} alt=" "/>
        <p>Dasara winners </p>

    </div>
    </div>

    <div className="program">
    <img src= {program_6} alt=" "/>
    <div className="caption">
        <img src={program_icon3} alt=" "/>
        <p>Trowball
        </p>

    </div>
    </div>


    <div className="program">
    <img src= {program_7} alt=" "/>
    <div className="caption">
        <img src={program_icon3} alt=" "/>
        <p>kabbadi 
        </p>

    </div>
    </div>

    </div>
    </div>
  )
}

export default Achievements