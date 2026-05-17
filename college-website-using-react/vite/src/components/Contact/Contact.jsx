import React, { useState } from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState(""); // "sending" | "success" | "error"

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "2450d56e-260a-42e1-93d7-1c968765e2e7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setResult("✓ Message sent successfully!");
        event.target.reset();
      } else {
        setStatus("error");
        setResult("✗ " + data.message);
      }
    } catch {
      setStatus("error");
      setResult("✗ Something went wrong. Please try again.");
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          college community.</p>
        <ul>
          <li><img src={mail_icon} alt="" />gfgcThirthahalligmail.com</li>
          <li><img src={phone_icon} alt="" />1800 425 6178</li>
          <li><img src={location_icon} alt="" />GFGC thirthahalli, Balebailu</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number" required />
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
          <button type="submit" className={`btn dark-btn ${status === 'sending' ? 'btn-sending' : ''}`} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Submit Now'}
            {status !== 'sending' && <img src={white_arrow} alt="" />}
          </button>
        </form>
        {result && <span className={`form-result form-result-${status}`}>{result}</span>}
      </div>
    </div>
  );
};

export default Contact;
