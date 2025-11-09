import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home">
      {/* Navbar */}
      {/* Navbar */}
<nav className="navbar">
  <div className="logo">
    <img src="/VFilms Logo.png" alt="VFilms Logo"  />
  </div>

  <div className={`nav-links ${menuOpen ? "show" : ""}`}>
    <ul>
      <li>Services</li>
      <li>Their Stories</li>
      <li>Our Story</li>
      <li>Varnan</li>
      <li>
        <button className="talk-btn">Let’s Talk</button>
      </li>
    </ul>
  </div>
</nav>


      {/* Menu Icon */}
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="left">
          <div className="logo-container">
            <img src="/Hero Mandala.svg" alt="Mandala" className="mandala" />
            <div className="logo-text">
              <span className="v"><img src="/hero-image.png" alt="VF Logo" /></span>
            </div>
          </div>
        </div>

        <div className="right">
          <p className="tagline">
            Varnan is where stories find their voice and form
          </p>
          <br />
          <h3 className="sub">Films . Brands . Art</h3>
          <p className="desc">
            <br />
            Since 2008, V’s been telling stories – stories of people, their
            journeys, and the places that shape them. Some begin in polished
            boardrooms, others in humble village squares. But every story starts
            the same way – by listening with intention. V celebrates its
            subjects, patterns, and an eye for the unseen to capture what truly
            matters. V doesn’t just tell stories – V honors them.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;