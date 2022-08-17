import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Head from "next/head";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Customers() {
  return (
    <div className="customers-container" id="customers">
      <Head>
        <title>Polly Miners Customers </title>
        <meta name="description" content="Best Service in the market.Our customer says itself ." />
      </Head>
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
                  <h2>Ishan Shaik Zotac 3080 Mining Rig </h2>
                  <p>
                    Our client Ishan Shaik has build a Mining Rig of 3 cards
                    3080 Zotac Graphic Card with 300 MHS. Getting a profit of{" "}
                    <bold>18K per month</bold>.
                  </p>
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
                  <h2>Reckson Mixed 1660 Super and 3060ti Mining Rig </h2>
                  <p>
                    Our client Reckson build a 1660 super with 10 GPU&apos;s and
                    3060i with 3 GGPU{" "}
                  </p>
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
                  <h2>Rahul Karmokar Gaming PC</h2>
                  <p>
                    Our Client Rahul build a Good Gaming PC with 1660 6gb GPU
                    with Intel I7-12700 Processor and 16GB Ram and a Beautiful
                    cabinet
                  </p>
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
                  <h2>Rahul Karmokar Gaming PC</h2>
                  <p>
                    Our Client Rahul build a Good Gaming PC with 1660 6gb GPU
                    with Intel I7-12700 Processor and 16GB Ram and a Beautiful
                    cabinet.
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            href="https://www.youtube.com/watch?v=jWz8oaKLEKs"
            passHref={true}
            target="_blank"
          >
            <a>
              <div className="ccard cccard4">
                <div className="cc-content">
                  <h2>Jagir Dave 3060ti Mining Rig</h2>
                  <p>
                    Our client Jagir has build a Mining Rig of 8 cards 3060ti
                    Graphic Card with total 516 MHS. We have Provided him with
                    One year service on GPU&apos;s.
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Customers;
