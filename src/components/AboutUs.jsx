import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-left">
        <h2 className="about-title">A montage of familiar faces and names.</h2>
        <p className="about-desc">
          Some stories come from the biggest names. <br />
          Others begin with bold, rising voices. <br />
          We’ve been fortunate to walk alongside both – <br />
          listening, creating, and building stories that matter.
        </p>

        <div className="stats-wrapper">
  <div className="stats-container">
    <img src="/85+.svg" alt="Projects" className="stat1" />
    <img src="/50+.svg" alt="Happy Clients" className="stat2" />
    <img src="/10+.svg" alt="Experts Team" className="stat3" />
  </div>
</div>

</div>


      <div className="about-right">
        <p className="right-text">
          Every project is more than just a brief – <br />
          it’s a new chapter waiting to be written. <br />
          Together, we’ve crafted tales that inspire, <br />
          connect, and endure.
        </p>

        <div className="brand-logos">
  <img src="/circle.svg" alt="Brands" className="brand-single" />
  <img src="/mou.svg" alt="mountain" className="mountain" />
</div>

      </div>
    </section>
  );
};

export default AboutUs;
