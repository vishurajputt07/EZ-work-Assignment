import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-container">

      <main>
        <h2 className="title">The Highlight Reel</h2>
        <p className="subtitle">Watch the magic we’ve captured.</p>

        <div className="video-player-wrapper">
            <div><img src="/cam.svg" alt="iii" className="cam1"></img>
</div>
            <img src="/Portfolio1.png" alt="iii" className="frame"></img>
            
            <img src="/Footer Vector.png" alt="iii" className="footer-vector"></img>

            

          <iframe
            className="video-player"
            src="https://www.youtube.com/embed/VIDEO_ID_1"
            title="Highlight Reel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
      </div>
  );
};

export default Portfolio;
