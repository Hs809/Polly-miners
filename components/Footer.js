import React from "react";
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { RiDiscordLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="footer-container">
      <h2>Polly Miners</h2>
      <div className="footer-wrapper">
        <ul className="footer-links">
          <li className="link">
            <a href="#">Home</a>
          </li>
          <li className="link">
            <a href="#">About Us</a>
          </li>
          <li className="link">
            <a href="#">Latest Gpu's</a>
          </li>
          <li className="link">
            <a href="#">Mining Services</a>
          </li>
          <li className="link">
            <a href="#">Contact Us</a>
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
      <p><a href="/">&copy;PollyMiners.in</a> </p>

    </div>
  );
}

export default Footer;
