import React, { useState } from 'react'
import "./Campus.css"
import gallery_1 from "../../assets/gps..jpg"
import gallery_2 from "../../assets/campus2.png"
import gallery_3 from "../../assets/campus3.png"
import gallery_4 from "../../assets/cl1.png"
import white_arrow from "../../assets/white-arrow.png"

const images = [gallery_1, gallery_2, gallery_3, gallery_4];

const Campus = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = (e) => { e.stopPropagation(); setLightbox(i => (i - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setLightbox(i => (i + 1) % images.length); };

  return (
    <div className='campus'>
      <div className='gallery'>
        {images.map((img, i) => (
          <div key={i} className="gallery-item" onClick={() => openLightbox(i)}>
            <img src={img} alt={`Campus ${i + 1}`} />
            <div className="gallery-overlay">
              <span>&#128269;</span>
            </div>
          </div>
        ))}
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>

      {lightbox !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lb-close" onClick={closeLightbox}>&#10005;</button>
          <button className="lb-prev" onClick={prev}>&#8249;</button>
          <img src={images[lightbox]} alt="Gallery" onClick={e => e.stopPropagation()} />
          <button className="lb-next" onClick={next}>&#8250;</button>
        </div>
      )}
    </div>
  );
};

export default Campus;
