import React, { useRef } from 'react'
import "./Testimonials.css"
import next1_icon from "../../assets/next-icon.png"
import back11_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/jpgph.jpg" 
import user_2 from "../../assets/jpgph.jpg" 
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/i.jpg"  


const Testimonials = () => {
  const slider=useRef();
  let tx=0;
const slideForward=()=>{
  if(tx> -50){
    tx-=25;
  }
  slider.current.style.transform="translateX(${tx}%)"

}
const slideBackward=()=>{
    if(tx<0){
      tx+=25;
    }
    slider.current.style.transform="translateX(${tx}%)"
}


  return (
   /*<div className='testimonials'>
    <img src={next1_icon} alt="" className="next-btn/>
    
   <img src={next1_icon} alt=" " className="next-btn" onClick=
   {slideForward}/>
   <img src={back11_icon} alt=" " className='back-btn' onClick={slideBackward}/>*/
   
   <div className="testimonials">
      <img src={next1_icon} alt="" className='next-btn' onClick={slideForward}/>
       <img src={back11_icon} alt=" " className='back-btn' onClick={slideBackward}/>
    <div className="slider">
      <ul ref={slider}>
        <li>
          <div className="slide">
            <div className="userinfo">
              <img src={user_1} alt=""/>
              <div>
                <h3>Anusha MP</h3>
                <span>BSC Student</span>
              </div>
            </div>
            <p>choosing to purse my degree at this 
              college was one best decision I've ever made.
              The supportive community,lecturers,frieds and
              commitment to academic excellence have truly
             exceeded my expectations 
            </p>
          </div>
        </li>

        <li>
          <div className="slide">
            <div className="userinfo">
              <img src={user_2} alt=""/>
              <div>
                <h3>Sinchan</h3>
                <span>BA Student</span>
              </div>
            </div>
            <p>I am very greatefull to choose this college 
              college was one best decision I've ever made.
              The supportive community,lecturers,frieds and
              commitment to academic excellence have truly
             exceeded my expectations.
            </p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="userinfo">
              <img src={user_3} alt=""/>
              <div>
                <h3>Preksha</h3>
                <span>BCA Student</span>
              </div>
            </div>
            <p>choosing to purse my degree at this 
              college was one best decision I've ever made.
              The supportive community,lecturers,frieds and
              commitment to academic excellence have truly
             exceeded my expectations 
            </p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="userinfo">
              <img src={user_4} alt=""/>
              <div>
                <h3>Rahul</h3>
                <span>Bcom Student</span>
              </div>
            </div>
            <p>choosing to purse my degree at this 
              college was one best decision I've ever made.
              The supportive community,lecturers,frieds and
              commitment to academic excellence have truly
             exceeded my expectations 
            </p>
          </div>
        </li>
       
      </ul>
    </div>
   </div>
  );
};

export default Testimonials;