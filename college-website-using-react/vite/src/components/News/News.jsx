import React from 'react'
import { useState, useEffect } from "react";
import "./News.css"

function Blink(props) {
  const [state, setState] = useState("hidden");

  useEffect(() => {

    setInterval(() => {

      setState("visible");
      console.log("changed");

    }, 1000);

    return () => clearInterval();
  }, [state]);

  return <span style={{ visibility: state }}>{props.children}</span>;

}
const News = () => {
  return (
<div className='news'>   
        <div className="time">
           
           <p>
           
            <ul>
            <li>first internal:18-06-2024 to 24-06-2024</li>
            <li>second- internal: 22-07-2024</li>
            <li>Samaropa-samaramba -03-08-2024</li>
            <li>Inter-college women's and men Sepaktakra 2nd Prize</li>
            <li>Lab internals for 2nd, 4th and 6th sem will start from 16 august 2024 </li>
            <li>the theory exam for 2nd, 4th and 6th semester will start from 26 August 2024</li>
            </ul>
           
            </p>
          
        </div>
        </div> 
   
  )
}

export default News