import React from "react";
import "./FilmProduction.css";

const FilmProduction = () => {
  return (
    <section className="film-production">
      {/* Background Elements */}
      <img src="/Camera 04.svg" alt="" className="bg-icon left-icon" />
      <img src="/Camera 01.svg" alt="" className="bg-icon right-icon" />
      <img src="/Camera 02.svg" alt="" className="bg-icon bottom-right" />
      <img src="/Camera 03.svg" alt="" className="bg-icon bottom-right2" />


      {/* Quote Section */}
      <div className="quote-section">
        <h2 className="quote">
          "Filmmaking is a chance to live many lifetimes." – Robert Altman
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
            src="/Production.png"
            alt="Film Production"
            className="main-image"
          />
          {/* <p className="caption">Film Production</p> */}
        </div>

        <div className="text-content">
          <p>
            Who says films are just an escape? We see them as a way to live many
            lives – to feel, to explore, and to tell stories that stay. <br /> And with
            each film, we carry new memories and new reasons to keep creating.
          </p>
          <p>V crafts:</p>
          <ul>
            <li>Documentaries</li>
            <li>Corporate Videos</li>
            <li>2D Animation Videos</li>
            <li>3D Animation Videos</li>
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

export default FilmProduction;
