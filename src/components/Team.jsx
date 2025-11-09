import React from "react";
import "./Team.css";

const Team = () => {
  return (
    <section
  className="team-section"
>

      {/* Sticky note text box */}
      <img src="/notes.png" alt="note" className="note-img" />

      {/* India Gate illustration */}
      <img src="/indiagate.png" alt="India Gate" className="india-gate" />

      {/* Team Silhouettes and Arrows */}
      <div className="team-center">
        {/* Left Arrow + Text */}
        <img src="/Vector.svg" alt="arrow left" className="arrow arrow-left" />
        <span className="left-label">Branding Experts</span>

        {/* Center Image + Up Arrow + Text */}
        <div className="silhouette-box">
          <img src="/Group 2.svg" alt="team silhouettes" className="silhouette-img" />
          <img src="/Vector-1.svg" alt="arrow up" className="arrow arrow-up" />
          <span className="up-label">Film Makers</span>
        </div>

        {/* Right Arrow + Text */}
        <img src="/Vector-2.svg" alt="arrow right" className="arrow arrow-right" />
        <span className="right-label">Art Curators</span>
      </div>

      {/* Footer line with button */}
      <p className="footer-text">
        Take a closer look at the stories V bring to life.<br></br>
        <button className="button">View Portfolio</button>
      </p>
    </section>
  );
};

export default Team;
