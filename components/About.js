import React, { useState } from "react";
import Image from "next/image";
import valueImg from "../styles/images/values.png";
import visionImg from "../styles/images/vision.png";
import missionImg from "../styles/images/mission.png";


function About() {
  const [data, setData] = useState({
    img: valueImg,
    mainTitle: "We use experience and knowledge to make service better",
    pointOneTitle: "Professional",
    pointOneDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, hic.",
    pointsecondTitle: "Quality",
    pointTwoDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, hic.",
  });
  const [state, setState] = useState("values");
  const handleData = (properties) => {
    switch (properties) {
      case "values":
        setState("values")
        setData({
          img: valueImg,
          mainTitle: "We use experience and knowledge to make service better",
          pointOneTitle: "Professional",
          pointOneDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, hic.",
          pointTwoTitle: "Quality",
          pointTwoDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, hic.",
        });
        
        break;
      case "mission":
        setState("mission")
        setData({
          img: visionImg,
          mainTitle: "We use experience and knowledge to make service better",
          pointOneTitle: "Mission 1",
          pointOneDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, hic.",
          pointTwoTitle: "Mission 2",
          pointTwoDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, hic.",
        });
        
        break;
      case "vision":
        setState("vision")
        setData({
          img: missionImg,
          mainTitle: "We use experience and knowledge to make service better",
          pointOneTitle: "Vision 1",
          pointOneDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, hic.",
          pointTwoTitle: "Vision 2",
          pointTwoDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, hic.",
        });
        
        break;

      default:
        break;
    }
  };

  return (
    <div className="about-container">
      <div className="about-header">
        <div className="about-mission">
          <p onClick={() => handleData("values")} className={state== "values" ? "active" : ""}>Values</p>
          <p onClick={() => handleData("mission")} className={state== "mission" ? "active" : ""}>Mission</p>
          <p onClick={() => handleData("vision")} className={state== "vision" ? "active" : ""}>Vision</p>
        </div>
        <h3>Why Choose Us</h3>
      </div>
      <div className="about-description">
        <div id="values">
          <div className="description-img">
            <Image
              src={data.img}
              width={16}
              height={12}
              layout="responsive"
              placeholder="blur"
            />
          </div>
          <div className="description-details">
            <h3>{data.mainTitle}</h3>
            <div className="description-points">
              <hr />
              <div className="first-point">
                <div className="first-point-wrapper">
                  <h3>{data.pointOneTitle}</h3>
                  <p>
                   {data.pointOneDescription}
                  </p>
                </div>
              </div>
              <div className="second-point">
                <div className="second-point-wrapper">
                  <h3>{data.pointTwoTitle}</h3>
                  <p>
                   {data.pointTwoDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
