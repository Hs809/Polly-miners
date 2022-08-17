import React from "react";

import Link from 'next/link'
import Image from "next/image";
import { BiPhoneCall } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";
import {
  AiOutlineYoutube,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Head from "next/head";
import Newsletter from "./Newsletter";

function Footer() {
  return (
    <div className="footer-container">
      <Head>
        <title>Polly Miners</title>
        <meta name="description" content="Polly miners, graphic cards, mining rigs, gaming pc, etc." />
      </Head>
      <div className="footer-wrapper">
        <div className="footer-header">
          <div className="footer-logo">
            <Image
              className="logo"
              src="/Images/bg-logo.png"
              alt="logo"
              priority
              width={150}
              height={140}
            />
          </div>
          <p>Ease your Gaming and  Mining Experience</p>
          <Link href="#about">
            <button className="footer-btn">Read More</button>
          </Link>
        </div>

        <ul className="quick-links">
          <h3>Quick Links</h3>
          <li className="link">
            <Link href="#hero">Home</Link>
          </li>
          <li className="link">
            <Link href="#service">Mining Services</Link>
          </li>
          <li className="link">
            <Link href="#about">About Us</Link>
          </li>
          {/* <li className="link">
            <Link href="#">Latest Gpu&apos;s</Link>
          </li> */}
          <li className="link">
            <Link href="#customers">Happy Customers</Link>
          </li>
          <li className="link">
            <Link href="#contact">Contact Us</Link>
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
            <Link
              href="https://www.youtube.com/c/POLLYMINERS"
              rel="noreferrer"
            >
              <a target="_blank">Youtube</a>
              
            </Link>
          </li>
          {/* <li>
            <AiOutlineInstagram />
            <Link href="#">www.instagram.com</Link>
          </li>
          <li>
            <FiFacebook />
            <Link href="#">www.facebook.com</Link>
          </li> */}
          <li>
            <BsTelegram />
            <Link href="https://t.me/polly_miner">
              <a target="_blank">Telegram</a> 
            </Link>
          </li>
          <li>
            <AiOutlineWhatsApp />
            <Link href="https://wa.me/message/BP2SEUBKT2R2G1">
              <a target="_blank">WhatsApp</a>
             </Link>
          </li>
        </ul>
        <ul className="newsletter">
          <h3>Newsletter</h3>
          <Newsletter />
          <p>
            Suscribe to our Newsletter to get daily updates on GPU&apos;s prices
          </p>
        </ul>
      </div>
      <hr />
      <p className="copyright">
        <Link href="/">&copy;&#x20;PollyMiners.in</Link>
      </p>
    </div>
  );
}

export default Footer;
