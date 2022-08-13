import React from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react";

function Customers() {
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== "undefined") {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
  const size = useWindowSize();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: size.width > 750 ? 2 : 1,
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
