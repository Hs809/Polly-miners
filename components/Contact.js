import React, { useState, useRef } from "react";
import Select from "react-select";
import emailjs from "@emailjs/browser";

const PUBLIC_KEY = "uMnA-Oe16rc5RzAwE";
const SERVICE_ID = "service_w5s81km";
const TEMPLATE_ID = "template_8cee97h";

import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.min.css'


const options = [
  { value: "mining rig", label: "Mining Rigs" },
  { value: "mining service", label: "Mining Service" },
  { value: "gpu", label: "Graphics Card" },
  { value: "pc", label: "Gaming PC" },
];

function Contact() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [state, setState] = useState({
    from_name: "",
    email: "",
    mobile: "",
    message: ""
  })

  const handleChange = (e) => {
    const {name,value} = e.target;
    setState({
      ...state,
      [name]:value
    })
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        new Notify({
          status: 'success',
          title: 'Success',
          text: 'We got your message, We will right back at you',
          effect: 'slide',
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
          position: 'right top'
        })
        console.log(result.text, "me");
      },
      (error) => {
        Notify({
          status: 'error',
          title: 'Error',
          text: 'Something might have broke down. You can come back later',
          effect: 'fade',
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
          position: 'right top'
        })
        console.log(error.text);
      }
    );
    setState({
      from_name: "",
      email: "",
      mobile: "",
      message: ""
    })
    setSelectedOption(null)
  };

  return ( 
    <div className="contact-container" id="contact">
      <h1>We are here to solve your queries</h1>
      <p>
        Our inbox is always open for you, you can send your queries or just say
        hii and Tell us what you are mining
      </p>
      <div className="contact-wrapper">
        {/* <div className="contact-details"></div> */}
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <h3>Get in Touch</h3>
            <div className="first-column">
              <div>
                {/* <label htmlFor="name">Full Name</label> */}
                <input type="text" name="from_name" id="name" required placeholder="Full Name" value={state.from_name} onChange={handleChange} />
              </div>
              <div>
                {/* <label htmlFor="email">Email ID</label> */}
                <input type="email" name="email" id="email" required  placeholder="Email ID" value={state.email} onChange={handleChange}/>
              </div>
            </div>
              <div>
                {/* <label htmlFor="number">Mobile Number</label> */}
                <input
                  type="number"
                  name="mobile"
                  id="mobile-number"
                  required
                  placeholder="Mobile Number"
                  value={state.mobile} onChange={handleChange}
                />
              </div>
              <div>
                {/* <label htmlFor="query">Your Query</label> */}

                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  width="100%"
                  instanceId="selectbox"
                  // height="60px"
                  name="query"
                  required
                  placeholder="Your Query"
                />
              </div>
            <textarea
              name="message"
              placeholder="Your Message"
              id="message"
              cols="30"
              rows="5"
              required
              value={state.message} onChange={handleChange}
            ></textarea>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
