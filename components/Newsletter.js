import React, { useState } from "react";
import background from "../styles/images/newsletterbackground.png";
import Image from "next/image";
import {AiOutlineMail} from 'react-icons/ai'
import Notify from "simple-notify";

function Newsletter() {
  const [status, setStatus] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const FORM_URL = `https://app.convertkit.com/forms/3494611/subscriptions`;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      });

      setEmail("");
      const json = await response.json();

      if (json.status === "success") {
        setStatus("SUCCESS");
        new Notify({
          status: "success",
          title: "Success",
          text: "ThankYou for Suscribing Us",
          effect: "slide",
          speed: 200,
          customClass: null,
          customIcon: null,
          showIcon: true,
          showCloseButton: true,
          autoclose: false,
          autotimeout: 3000,
          gap: 20,
          distance: 20,
          type: 1,
          position: "right top",
        });
        return;
      }
    } catch (err) {
      Notify({
        status: "error",
        title: "Error",
        text: "Something might have broke down. in newsletter",
        effect: "fade",
        speed: 300,
        customClass: null,
        customIcon: null,
        showIcon: true,
        showCloseButton: true,
        autoclose: false,
        autotimeout: 3000,
        gap: 20,
        distance: 20,
        type: 1,
        position: "right top",
      });
      setStatus("ERROR");
    }
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };
  return (
    <div className="newsletter-container">
      <div className="news-letter-wrapper">
        <div className="first-section">
          <form onSubmit={handleSubmit} className="news-form">
            {/* <input
                aria-label="Your first name"
                name="fields[first_name]"
                placeholder="Your first name"
                type="text"
                onChange={handleNameChange}
                value={name}
              /> */}
            <input
              aria-label="Your email address"
              name="email_address"
              placeholder="Your email address"
              required
              type="email"
              onChange={handleEmailChange}
              value={email}
            />
            <button><AiOutlineMail /></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
