import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Animate } from "react-simple-animate";
import Link from "next/link";
import Image from "next/image";

function Menu() {
  const [state, setState] = useState(false);

  return (
    <nav className="navbar-container">
      {/* <img src="" alt="" className="logo" /> */}
      <Link href="/" passHref>
        <a>
          <Image className="logo" src="/Images/logo.png" alt="logo" width={100} height={60}   />
        </a>
      </Link>
      <div className="bar-logo" onClick={() => setState(!state)}>
        <FaBars />
      </div>

      <div className={state ? "navbar-drawer show" : "navbar-drawer"}>
        <div className="cross-logo" onClick={() => setState(!state)}>
          <ImCross />
        </div>
        <ul className="drawer-links">
          <li className="dlink">
            <Link href="#hero">HOME</Link>
          </li>
          <li className="dlink">
            <Link href="#about">ABOUT</Link>
          </li>
          <li className="dlink">
            <Link href="#service">SERVICES</Link>
          </li>
          <li className="dlink">
            <Link href="#contact">
              <button className="contact-btn"> CONTACT US</button>
            </Link>
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
            <Link href="#hero">HOME</Link>
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
            <Link href="#about">ABOUT</Link>
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
            <Link href="#">Best Gpu's</Link>
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
            <Link href="#service">SERVICES</Link>
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
            <Link href="#customers">
              HAPPY CUSTOMERS
            </Link>
          </li>
        </Animate>
        <Animate
          play={true}
          delay={1.4}
          duration={0.8}
          start={{ opacity: 0, transform: "translateY(-20px)" }}
          end={{ opacity: 1, transform: "translateY(0px)" }}
          easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
        >
          <li className="link-btn">
            <Link href="#contact">
              <button className="contact-btn">CONTACT US</button>
            </Link>
          </li>
        </Animate>
      </ul>
    </nav>
  );
}

export default Menu;
