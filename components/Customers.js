import React from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Customers() {
  return (
    <div className="customers-container" id="customers">
      <p className="customer-subititle">
        OUR <span>HAPPY</span>
      </p>
      <h2 className="cctitle">CUSTOMERS</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1.5}
        freeMode={true}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Link
            href="https://www.youtube.com/watch?v=pGpEVzGuKe0&t=54s"
            passHref={true}
            target="_blank"
          >
            <a>
              <div className="ccard cccard1">
                <div className="cc-content">
                  <h2>Ishan Zotac 3080 Mining Rig</h2>
                  <p>Lorem to pur description of that fucked up person</p>
                </div>
              </div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            href="https://www.youtube.com/watch?v=jWz8oaKLEKs&t=48s"
            passHref={true}
            target="_blank"
          >
            <a>
              <div className="ccard cccard2">
                <div className="cc-content">
                  <h2>Rocshon 3060ti * 8 Mining Rig </h2>
                  <p>Lorem to pur description of that fucked up person</p>
                </div>
              </div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            href="https://www.youtube.com/watch?v=ZDedq0Qvp2s&t=37s"
            passHref={true}
            target="_blank"
          >
            <a>
              <div className="ccard cccard3">
                <div className="cc-content">
                  <h2>Rahul Gaming PC</h2>
                  <p>Lorem to pur description of that fucked up person</p>
                </div>
              </div>
            </a>
          </Link>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default Customers;

