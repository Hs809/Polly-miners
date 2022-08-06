import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import {  Animate } from "react-simple-animate";

function Menu() {
  const [state, setState] = useState(false);

  return (
    <nav className="navbar-container">
      {/* <img src="" alt="" className="logo" /> */}
      <a href="#">
       <h2 className="logo">Polly Miners</h2>

      </a>
      <div className="bar-logo" onClick={() => setState(!state)}>
        <FaBars />
      </div>

      <div className={state ? "navbar-drawer show" : "navbar-drawer"}>
        <div className="cross-logo" onClick={() => setState(!state)}>
          <ImCross />
        </div>
        <ul className="drawer-links">
          <li className="dlink">
            <a href="#home">Home</a>
          </li>
          <li className="dlink">
            <a href="#about">About Us</a>
          </li>
          <li className="dlink">
            <a href="#service">Mining Service</a>
          </li>
          <li className="dlink">
            <a href="#contact">
              <button className="contact-btn"> Contact Us</button>
            </a>
          </li>
        </ul>
      </div>
      <ul className="nav-links">
        <Animate
          play={true}
          delay={0.3}
          duration={0.8}
          start={{ opacity: 0, transform: "translateY(-20px)" }}
          end={{ opacity: 1, transform: "translateY(0px)" }}
          easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
        >
          <li className="link">
            <a href="#home">Home</a>
          </li>
        </Animate>
        <Animate
          play={true}
          delay={0.5}
          duration={0.8}
          start={{ opacity: 0, transform: "translateY(-20px)" }}
          end={{ opacity: 1, transform: "translateY(0px)" }}
          easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
        >
          <li className="link">
            <a href="#about">About Us</a>
          </li>
        </Animate>
        {/* <Animate
          play={true}
          delay={0.7}
          duration={0.8}
          start={{ opacity: 0, transform: "translateY(-20px)" }}
          end={{ opacity: 1, transform: "translateY(0px)" }}
          easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
        >
          <li className="link">
            <a href="#">Best Gpu's</a>
          </li>
        </Animate> */}
        <Animate
          play={true}
          delay={0.9}
          duration={0.8}
          start={{ opacity: 0, transform: "translateY(-20px)" }}
          end={{ opacity: 1, transform: "translateY(0px)" }}
          easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
        >
          <li className="link">
            <a href="#service">Mining Service</a>
          </li>
        </Animate>
        <Animate
          play={true}
          delay={1.1}
          duration={0.8}
          start={{ opacity: 0, transform: "translateY(-20px)" }}
          end={{ opacity: 1, transform: "translateY(0px)" }}
          easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
        >
          <li className="link">
            <a href="#contact">
              <button className="contact-btn">Contact Us</button>
            </a>
          </li>
        </Animate>
      </ul>
    </nav>
  );
}

export default Menu;
