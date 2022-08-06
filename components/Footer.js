import React from "react";
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { RiDiscordLine } from "react-icons/ri";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer-container">
      <Link href="/">
        <h2>Polly Miners</h2>
      </Link>
      <div className="footer-wrapper">
        <ul className="footer-links">
          <li className="link">
            <a href="#home">Home</a>
          </li>
          <li className="link">
            <a href="#about">About Us</a>
          </li>
          {/* <li className="link">
            <a href="#">Latest Gpu&apos;s</a>
          </li> */}
          <li className="link">
            <a href="#service">Mining Services</a>
          </li>
          <li className="link">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        <ul className="social-links">
          <li className="slink">
            <a href="#">
              <AiOutlineYoutube style={{ color: "#E21717" }} />
            </a>
          </li>
          <li className="slink">
            <a href="#">
              <AiOutlineInstagram style={{ color: "#E83A59" }} />
            </a>
          </li>
          <li className="slink">
            <a href="#">
              <AiOutlineFacebook style={{ color: "#1B98F5" }} />
            </a>
          </li>
          <li className="slink">
            <a href="#">
              <RiDiscordLine style={{ color: "#383CC1" }} />{" "}
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <p>
        <Link href="/">&copy;PollyMiners.in</Link>
      </p>
    </div>
  );
}

export default Footer;
