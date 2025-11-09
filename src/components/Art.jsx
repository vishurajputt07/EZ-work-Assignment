import React from "react";
import "./Art.css";

const Art = () => {
  return (
    <section className="branding">
      {/* Background Elements */}
      <img src="/Art Curation Icons 02.svg" alt="" className="bg-icon left-icon" />
      <img src="/Art Curation Icons 01.svg" alt="" className="bg-icon right-icon" />
      <img src="/Art Curation Icons 04.svg" alt="" className="bg-icon bottom-right" />
      <img src="/Art Curation Icons 03.svg" alt="" className="bg-icon bottom-right2" />

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
            src="/Art.png"
            alt="Art"
            className="main-image"
          />
  
        </div>

        <div className="text-content">
          <p>
            Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong. <br />
Through every festival, every performance, and every gathering, we help stories find their stage and their people.
          </p>
          <p>V curates:</p>
          <ul>
            <li>Art Festivals</li>
            <li>Live Performance</li>
            <li>Community Events</li>
            <li>Cultural Storytelling</li>
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

export default Art;
