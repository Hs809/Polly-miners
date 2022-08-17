import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../styles/images/hero.png";
import Head from "next/head";
function Hero() {
  return (
    <div id="hero">
      <Head>
        <title>Mining Rigs and Gaming PC</title>
        <meta
          name="description"
          content="Best Mining Rig and Gaming PC service Provider."
        />
      </Head>
      <div className="hero-container">
        <div className="hero-details">
          <p className="welcome">
            Welcome To <span>Polly Miners</span>
          </p>
          {/* <AnimateGroup play={true}>
            {[
              "E",
              "a",
              "s",
              "e",
              " ",
              "Y",
              "o",
              "u",
              "r",
              " ",
              "M",
              "i",
              "n",
              "i",
              "n",
              "g",
              " ",
              "E",
              "x",
              "p",
              "e",
              "r",
              "i",
              "e",
              "n",
              "c",
              "e",
              " ",
              "W",
              "i",
              "t",
              "h",
              " ",
              "U",
              "s",
            ].map((item, index) => {
              return (
                <Animate
                  key={index}
                  sequenceIndex={index}
                  duration={0.09}
                  start={{ opacity: 0, transform: "translateY(-10px)" }}
                  end={{ opacity: 1, transform: "translateY(0px)" }}
                  style={{ fontSize: "40px", fontWeight: "bold" }}
                  easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
                  render={({ style }) => <span style={style}>{item}</span>}
                ></Animate>
              );
            })}
          </AnimateGroup> */}
          <span>Ease Your Mining Experience</span>
          {/* <Animate
            play={true}
            duration={0.5}
            delay={3.69}
            start={{ opacity: 0, transform: "translate(0, 0)" }}
            end={{ opacity: 1, transform: "translate(0px, 10px)" }}
          > */}
          <p>
            We here at polly miners will provide you with the most competitive
            service, graphic cards, components and gaming PCs at jaw-dropping
            price.
          </p>
          {/* </Animate>
          <Animate
            play={true}
            duration={0.5}
            delay={4}
            start={{ opacity: 0, transform: "translateY(-10px)" }}
            end={{ opacity: 1, transform: "translateY(0px)" }}
          > */}
          <Link href="#contact" passHref={true}>
            <a>
              <button className="contact-btn">Contact Us</button>
            </a>
          </Link>
          {/* </Animate> */}
          <div className="circle"></div>
        </div>
        <div className="hero-img">
          {/* <AnimateKeyframes
            play={true}
            duration="5"
            direction="alternate"
            iterationCount="infinite"
            keyframes={[
              "transform: translateY(-50px)",
              "transform: translateY( 0px)",
              "transform: translateY(-50px)",
              "transform: translateY(0px)",
            ]}
          > */}
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#dd9901"
              d="M39.6,-67.6C52.7,-61,65.7,-53.2,72.2,-41.7C78.8,-30.3,78.8,-15.1,78.5,-0.2C78.1,14.8,77.4,29.5,70.8,40.8C64.1,52,51.6,59.8,38.8,67.2C26,74.6,13,81.6,0,81.6C-13,81.5,-26,74.5,-39.3,67.5C-52.6,60.4,-66.3,53.3,-76.4,42C-86.6,30.8,-93.2,15.4,-90.9,1.3C-88.7,-12.8,-77.5,-25.6,-67.7,-37.3C-57.9,-49.1,-49.3,-59.8,-38.2,-67.6C-27.2,-75.4,-13.6,-80.1,-0.2,-79.8C13.2,-79.5,26.5,-74.2,39.6,-67.6Z"
              transform="translate(100 100)"
            />
          </svg>
          <Image
            src={HeroImage}
            alt="Hero Image"
            height={14}
            width={16}
            priority="true"
            layout="responsive"
            objectFit="cover"
          />
          {/* </AnimateKeyframes> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
