import React, { useState, useRef } from "react";
import Select from "react-select";
import emailjs from "@emailjs/browser";

const PUBLIC_KEY = "uMnA-Oe16rc5RzAwE";
const SERVICE_ID = "service_w5s81km";
const TEMPLATE_ID = "template_8cee97h";

const options = [
  { value: "mining rig", label: "Mining Rigs" },
  { value: "mining service", label: "Mining Service" },
  { value: "gpu", label: "Graphics Card" },
  { value: "pc", label: "Gaming PC" },
];

function Contact() {
  const [selectedOption, setSelectedOption] = useState(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contact-container">
      <h1>We are here to solve your queries</h1>
      <p>
        Our inbox is always open for you, you can send your queries or just say
        hii and Tell us what you are mining
      </p>
      <div className="contact-wrapper">
        <div className="contact-details"></div>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <h3>Contact Us</h3>
            <label htmlFor="name">Full Name</label>
            <input type="text" name="from_name" id="name" required />
            <label htmlFor="email">Email ID</label>
            <input type="email" name="email" id="email" required/>
            <label htmlFor="number">Mobile Number</label>
            <input type="number" name="mobile" id="mobile-number" required />

            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              placeholder="Queries"
              name="query"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              id="message"
              cols="30"
              rows="5"
              required
            ></textarea>
            <button className="submit-btn" type="submit">
              Get in touch with us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
