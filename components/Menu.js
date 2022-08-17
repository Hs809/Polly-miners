import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

function Menu() {
  const [state, setState] = useState(false);

  return (
    <nav className="navbar-container">
      <Head>
        <title>Polly Miners</title>
        <meta
          name="description"
          content="Polly miners build  Mining rig and Gaming PC's, We provide strong strategies and values to every customers."
        />
      </Head>
      <Link href="/" passHref>
        <a>
          <Image
            className="logo"
            src="/Images/logo.png"
            priority={true}
            alt="logo"
            width={120}
            height={70}
          />
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
            <Link href="#customers">Happy Customers</Link>
          </li>
          <li className="dlink">
            <Link href="#contact">
              <button className="contact-btn"> CONTACT US</button>
            </Link>
          </li>
        </ul>
      </div>
      <ul className="nav-links">
        <li className="link">
          <Link href="#hero">HOME</Link>
        </li>
        <li className="link">
          <Link href="#about">ABOUT</Link>
        </li>
        <li className="link">
          <Link href="#service">SERVICES</Link>
        </li>
        <li className="link">
          <Link href="#customers">HAPPY CUSTOMERS</Link>
        </li>
        <li className="link-btn">
          <Link href="#contact">
            <button className="contact-btn">CONTACT US</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
