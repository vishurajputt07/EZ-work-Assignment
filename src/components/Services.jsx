import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">
        The storyboard reveals the breadth of our craft.
      </h2>
      <img src="/line.svg" alt="vector" className="line" />

      <div className="services-cards">
        {/* Card 1 */}
        <div className="service-card tilt-left">
          <img src="/upper.svg" alt="tape" className="tape1" />
          <div className="image-frame">
            <img src="111.svg" alt="Film Production" className="img1" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="service-card">
          <img src="/upper.svg" alt="tape" className="tape2" />
          <div className="image-frame">
            <img src="/222.svg" alt="Branding" className="img2" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="service-card tilt-right">
          <img src="/upper.svg" alt="tape" className="tape3" />
          <div className="image-frame">
            <img src="/333.svg" alt="Art Curation" className="img3" />
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <img src="/bottom.svg" alt="Decorative Border" className="services-border" />
    </section>
  );
};

export default Services;
