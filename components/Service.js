import Image from "next/image";
import React from "react";


function Service() {
  return (
    <div className="service-container" id="service">
      <div className="service-wrapper">
        <div className="service-info">
          <p>
            WHAT <span>SERVICES</span>{" "}
          </p>
          <h3>WE OFFER</h3>
          <div className="offer-line"></div>
          <p className="service-description">
            We offer of service from what is the best gpu/coin/software to
            making maximum return on investment.
          </p>
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="card-section">
              <p>01</p>
              <div className="image-wrapper">
                <Image
                  alt="service1"
                  src="/Images/month.svg"
                  width={130}
                  height={90}
                  priority
                />
              </div>
            </div>
            <h3>
              One Time <br /> Service
            </h3>
          </div>
          <div className="service-card">
            <div className="card-section">
              <p>02</p>
              <div className="image-wrapper">
                <Image
                  alt="service1"
                  src="/Images/year.svg"
                  width={130}
                  height={90}
                  priority
                />
              </div>
            </div>
            <h3>
              One Year Full  <br /> Service with Setup
            </h3>
          </div>
          <div className="service-card">
            <div className="card-section">
              <p>03</p>
              <div className="image-wrapper">
                <Image
                  alt="service1"
                  src="/Images/setup.svg"
                  width={130}
                  height={90}
                  priority
                />
              </div>
            </div>
            <h3>
              One Year Only <br />
              Service
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
