import Image from "next/image";
import React from "react";
import service1 from "../styles/images/service1.png";
import service2 from "../styles/images/service2.png";
import service3 from "../styles/images/service3.png";
import service4 from "../styles/images/service4.png";

function Service() {
  return (
    <div className="service-container" id="service">
      <h1>Polly Mining Services </h1>
      <div className="service-cards">
        <div className="service-card">
          <div className="image-wrapper">
            <Image src={service1} width={16} height={12} layout="responsive" />
          </div>
          <h3>One Time Setup</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            quo?
          </p>
        </div>
        <div className="service-card">
          <div className="image-wrapper">
            <Image src={service2} layout="responsive" />
          </div>
          <h3>One Year Setup &amp; Full Service</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            quo?
          </p>
        </div>
        <div className="service-card">
          <div className="image-wrapper">
            <Image src={service3} layout="responsive" />
          </div>
          <h3>One Time Service</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            quo?
          </p>
        </div>
        <div className="service-card">
          <div className="image-wrapper">
            <Image src={service4} layout="responsive" />
          </div>
          <h3>One Year Service</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            quo?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
