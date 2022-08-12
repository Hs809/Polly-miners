import Image from "next/image";
import React from "react";
import Slider from "react-slick";

function Customers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="customers-container" id="customers">
      <p className="customer-subititle">
        OUR <span>HAPPY</span>
      </p>
      <h2 className="cctitle">CUSTOMERS</h2>

      <Slider {...settings}>
        <div className="ccard">
          <div className="cc-content">
            <h2>Person Name</h2>
            <p>Lorem to pur description of that fucked up person</p>
          </div>
        </div>
        <div className="ccard">
          <div className="cc-content">
            <h2>Person Name</h2>
            <p>Lorem to pur description of that fucked up person</p>
          </div>
        </div>
        <div className="ccard">
          <div className="cc-content">
            <h2>Person Name</h2>
            <p>Lorem to pur description of that fucked up person</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Customers;
