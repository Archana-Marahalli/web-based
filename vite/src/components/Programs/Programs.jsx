import React from 'react'
import "./Programs.css"
import program_1 from "../../assets/bca.png"
import program_2 from "../../assets/bsc.png"
import program_3 from "../../assets/bcom1.png"
import program_4 from "../../assets/bba.png"
import program_5 from "../../assets/ba.jpeg"
import program_6 from "../../assets/mcom.png"

import program_icon1 from "../../assets/computer.png" 
import program_icon3 from "../../assets/baicon.png" 
import program_icon4 from "../../assets/cal.png" 

const Programs = () => {
  return (
    <div className="programs" id="program">
    <div className="program">
    <img src= {program_1} alt=" "/>
    <div className="caption">
        <img src={program_icon1} alt=" "/>
        <p>BCA</p>

    </div>
    </div>
    <div className="program">
    <img src= {program_2} alt=" "/>
    <div className="caption">
        <img src={program_icon1} alt=" "/>
        <p>BSC</p>

    </div>
    </div>

    <div className="program">
    <img src= {program_3} alt=" "/>
    <div className="caption">
        <img src={program_icon4} alt=" "/>
        <p>BCOM</p>

    </div>
    </div>

    <div className="program">
    <img src= {program_4} alt=" "/>
    <div className="caption">
        <img src={program_icon1} alt=" "/>
        <p>BBA</p>

    </div>
    </div>

    <div className="program">
    <img src= {program_5} alt=" "/>
    <div className="caption">
        <img src={program_icon3} alt=" "/>
        <p>BA </p>

    </div>
    </div>

    <div className="program">
    <img src= {program_6} alt=" "/>
    <div className="caption">
        <img src={program_icon4} alt=" "/>
        <p>Masters
            MCOM
        </p>

    </div>
    </div>


    </div>
  )
}

export default Programs