import React, { useRef, useState, useEffect } from 'react'
import "./Testimonials1.css"
import next_btn from "../../assets/next-icon.png"
import back_btn from "../../assets/back-icon.png"
import user_1 from "../../assets/jpgph.jpg"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"

const TOTAL_SLIDES = 4;

export const Testimonials1 = () => {
  const slider = useRef();
  const [current, setCurrent] = useState(0);
  const autoRef = useRef(null);

  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(index, TOTAL_SLIDES - 1));
    setCurrent(clamped);
    slider.current.style.transform = `translateX(-${clamped * 25}%)`;
  };

  const slideForward = () => goTo(current < TOTAL_SLIDES - 1 ? current + 1 : 0);
  const slideBackward = () => goTo(current > 0 ? current - 1 : TOTAL_SLIDES - 1);

  const resetAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(slideForward, 4000);
  };

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setCurrent(prev => {
        const next = prev < TOTAL_SLIDES - 1 ? prev + 1 : 0;
        slider.current.style.transform = `translateX(-${next * 25}%)`;
        return next;
      });
    }, 4000);
    return () => clearInterval(autoRef.current);
  }, []);

  return (
    <div className='testimonials'>
      <img src={next_btn} className="next-btn" onClick={() => { slideForward(); resetAuto(); }} alt="Next" />
      <img src={back_btn} className="back-btn" onClick={() => { slideBackward(); resetAuto(); }} alt="Back" />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={user_1} alt="Anusha MP" />
                <div>
                  <h3>Anusha MP</h3>
                  <span>BSC</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at this college was one of the best decisions I've ever made. The supportive community, lecturers, friends and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={user_2} alt="Sinchan" />
                <div>
                  <h3>Sinchan</h3>
                  <span>BA</span>
                </div>
              </div>
              <p>I am very grateful to choose this college. It was one of the best decisions I've ever made. The supportive community, lecturers, friends and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={user_3} alt="Priya" />
                <div>
                  <h3>Priya</h3>
                  <span>BCOM</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at this college was one of the best decisions I've ever made. The supportive community, lecturers, friends and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={user_4} alt="Rahul" />
                <div>
                  <h3>Rahul</h3>
                  <span>BCA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at this college was one of the best decisions I've ever made. The supportive community, lecturers, friends and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="slider-dots">
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? 'dot-active' : ''}`}
            onClick={() => { goTo(i); resetAuto(); }}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials1;
