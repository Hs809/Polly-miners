import React from "react";
import Link from "next/Link";

function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-wrapper">
        <div className="about-image-container">
          <div className="about-image1"></div>
          <div className="about-image2"></div>
        </div>
        <div className="about-description">
          <p>
            About <span>POLLY</span> <span>MINERS</span>{" "}
          </p>
          <h3>
            Best <span>MINING RIGS SERVICE</span>
          </h3>
          <p className="about-info">
            Polly Miners help you understand your mining rig and PCs and guide
            you to improve and enrich your experience with IT solution
          </p>
          <ul className="special-points">
            <li className="point">
              Helps you to understand the profitability of the system
            </li>
            <li className="point">
              Full setup of Mining rigs, Gaming PCs, servers, etc.
            </li>
            <li className="point">
              Provide after sales service for your system
            </li>
          </ul>
          <Link target="_blank" href="https://www.youtube.com/c/POLLYMINERS/featured">
            <button className="discover-btn">Discover More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
