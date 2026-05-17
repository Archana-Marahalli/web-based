import React from 'react'
import "./Events.css"
import about_img from "../../assets/eve.jpg"
/*import play_icon from "../../assets/play-icon.png"*/



export const Events = ({setPlay}) => {
  return (
    <div className='event'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
           
        </div>
        <div className="about-right">
          <h3>Cultural</h3>
          <h1>Nurturing Tommorrow's Leader's Today</h1>
        <p>when students are involved in cocurricular.</p>
        <p>their mind will refresh with new things.</p>
        <p> the samaropa- samaramba events and other computations are refresh the students mind.</p>
    </div>
    </div>
  )
}

   
  

