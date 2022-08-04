import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import pc1 from "../styles/images/gamingpc1.jpg";
import pc2 from "../styles/images/gamingpc2.jpg";
import gpu from "../styles/images/gpu.jpg";

const fadeImages = [
  {
    url: pc1,
    caption: "First Slide",
  },
  {
    url: pc2,
    caption: "Second Slide",
  },
  {
    url: gpu,
    caption: "Third Slide",
  },
];

function BestGpu() {
  return (
    <div className="best-gpu-container">
      <Carousel autoPlay="true" interval="2000" infiniteLoop="true" className="carousel-container">
        <div>
          <Image src={gpu} width={16} height={9} layout="responsive" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <Image src={pc1} width={16} height={9} layout="responsive" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <Image src={pc2} width={16} height={9} layout="responsive"/>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default BestGpu;
