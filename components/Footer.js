import React from "react";

import { RiDiscordLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { BiPhoneCall } from "react-icons/bi";
import { FiFacebook } from "react-icons/fi";
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Newsletter from "./Newsletter";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-header">
          <div className="footer-logo">
            <Image
              className="logo"
              src="/Images/bg-logo.png"
              alt="logo"
              width={150}
              height={140}
            />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#about">
            <button className="footer-btn">Read More</button>
          </a>
        </div>

        <ul className="quick-links">
          <h3>Quick Links</h3>
          <li className="link">
            <a href="#hero">Home</a>
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
            <a href="#customers">Happy Customers</a>
          </li>
          <li className="link">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        <ul className="contact-links">
          <h3>Contact Us</h3>
          <li>
            <BiPhoneCall />
            91+ 89282 88856
          </li>
          <li>
            <AiOutlineYoutube />
            <a
              href="https://www.youtube.com/c/POLLYMINERS"
              target="_blank"
              rel="noreferrer"
            >
              www.youtube.com
            </a>
          </li>
          <li>
            <AiOutlineInstagram />
            <a href="#">www.instagram.com</a>
          </li>
          <li>
            <FiFacebook />
            <a href="#">www.facebook.com</a>
          </li>
          <li>
            <AiOutlineWhatsApp />
            <a href="#">www.whatsapp.com</a>
          </li>
        </ul>
        <ul className="newsletter">
          <h3>Newsletter</h3>
          <Newsletter />
          <p>Suscribe to our Newsletter to get daily updates on GPU&apos;s prices</p>
        </ul>
      </div>
      <hr />
      <p className="copyright">
        <Link href="/">&copy;PollyMiners.in</Link>
      </p>
    </div>
  );
}

export default Footer;
