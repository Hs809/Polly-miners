import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "../styles/images/hero.png";
import { AnimateKeyframes, AnimateGroup, Animate } from "react-simple-animate";
import { divStyle, buttonStyle } from "../styles/styles";

function Hero() {
  const [play, setPlay] = useState(false);

  return (
    <div className="hero-container">
      <div className="hero-details">
        <AnimateGroup play={true}>
          {[
            "M",
            "a",
            "k",
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
            "R",
            "i",
            "c",
            "h",
            "e",
            "r",
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
                key={item}
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
        </AnimateGroup>
        <Animate
          play={true}
          duration={0.5}
          delay={3.69}
          start={{ opacity: 0, transform: "translate(0, 0)" }}
          end={{ opacity: 1, transform: "translate(0px, 10px)" }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            illo quod quam deserunt veniam impedit sunt harum alias soluta
            reprehenderit?
          </p>
        </Animate>
        <Animate
          play={true}
          duration={0.5}
          delay={4}
          start={{ opacity: 0, transform: "translateY(-10px)" }}
          end={{ opacity: 1, transform: "translateY(0px)" }}
        >
          <button className="contact-btn">Contact Us</button>
        </Animate>
      </div>
      <div className="hero-img">
        <Animate
          play={true}
          duration={0.6}
          delay={0.04}
          start={{ opacity: 0, transform: "translateX(50px)" }}
          end={{ opacity: 1, transform: "translateX(0px)" }}
        >
          <Image
            src={HeroImage}
            alt="Hero Image"
            height={14}
            width={16}
            layout="responsive"
            objectFit="cover"
          />
        </Animate>
      </div>
    </div>
  );
}

export default Hero;
