import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx'
import { Testimonials1 } from './components/Testimonials1/Testimonials1.jsx'
import News from './components/News/News.jsx'
import { Events } from './components/Events/Events.jsx'
import Achievements from './components/Achievements/Achievements.jsx'
import Video from './components/Video/Video.jsx'

// Hook: observe elements and add 'visible' class when in viewport
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const App = () => {
  const [playState, setPlayState] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useScrollReveal();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div>
      <Navbar />
      <Hero />

      <div className="container">
        <div className="reveal"><Title subTitle="our Program" title="what we offer" /></div>
        <div className="reveal"><Programs /></div>
        <div className="reveal"><About setPlayState={setPlayState} /></div>
        <div className="reveal"><Title subTitle="Gallery" title="Campus" /></div>
        <div className="reveal"><Campus /></div>
        <div className="reveal"><Title subTitle="TESTIMONIALS" title="What Student says" /></div>
        <div className="reveal"><Testimonials1 /></div>
      </div>

      <div className="reveal"><Title subTitle="News" title="Get college news" /></div>
      <div className="reveal"><News /></div>

      <div className="reveal"><Title subTitle="Events" title="Co-curricular-Activities" /></div>
      <div className="reveal"><Events /></div>

      <div className="reveal"><Title subTitle="Achievements" title="Sports" /></div>
      <div className="reveal"><Achievements /></div>

      <div className="reveal"><Title subTitle="Support-us" title="Get in Touch" /></div>
      <div className="reveal"><Contact /></div>

      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />

      <button
        className={`scroll-top ${showTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        &#8679;
      </button>
    </div>
  );
};

export default App;
