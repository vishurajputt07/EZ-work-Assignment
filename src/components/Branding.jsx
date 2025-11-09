import React from "react";
import "./Branding.css";

const Branding = () => {
  return (
    <section className="branding">
      {/* Background Elements */}
      <img src="/Branding Vector 02.svg" alt="" className="bg-icon left-icon" />
      <img src="/Branding Vector 01.svg" alt="" className="bg-icon right-icon" />
      <img src="/Branding Vector 04.svg" alt="" className="bg-icon bottom-right" />
      <img src="/Branding Vector 03.svg" alt="" className="bg-icon bottom-right2" />

      {/* Navbar */}
      {/* <header className="navbar">
        <div className="logo">
          <span className="v">V</span>Films
        </div>
        <div className="menu-icon">
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header> */}

      {/* Quote Section */}
      <div className="quote-section">
        <h2 className="quote">
          "A brand is a voice, and a product is a souvenir" – Lisa Gansky
        </h2>
        <img img src="/Vector 5.svg" className="bg-icon quote-underline" alt="" />
      </div>

      {/* Back Button */}
      <button className="back-btn">
        <span>&lt;</span> Back
      </button>

      {/* Main Content */}
      <div className="content">
        <div className="image-card">
          <img
            src="/Frame 32.png"
            alt="Film Production"
            className="main-image"
          />
  
        </div>

        <div className="text-content">
          <p>
            A brand isn’t just what you see - it’s what you remember, what you carry home, and what you trust. <br />
            We shape brands that people remember, return to, and fall in love with.
          </p>
          <p>V creates:</p>
          <ul>
            <li>Branding & Communication</li>
            <li>Market Mapping</li>
            <li>Content Management</li>
            <li>Social Media Management</li>
            <li>Rebranding</li>
          </ul>
       
          <div className="explore">
            <p>Explore Now</p>
            <img src="/Arrow.svg" alt="arrow" className="bg-icon arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branding;
