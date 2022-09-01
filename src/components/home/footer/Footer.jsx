import "./Footer.scss";
import CopyRight from "../../copyRight/CopyRight.jsx";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Footer = () => {
  const form = useRef();
  const [confirm, setConfirm] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uxz2wz3",
        "template_fiot61h",
        form.current,
        "jkYs_JR56BJQ6vazO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
    setConfirm("Thanks for Your massage");
  };

  return (
    <div className="footer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <path
          fill="#009760"
          fillOpacity="1"
          d="M0,96L80,90.7C160,85,320,75,480,101.3C640,128,800,192,960,192C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="info ">
        <div className="container">
          <div className="row">
            <div className="col-5 col-md-4 details">
              <h2>NephrologyBD</h2>
              <div className="footer-menu">
                <a href="#">Terms and Condition</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Help Center</a>
              </div>
            </div>
            <div className="contact col-7 col-md-8">
              <div className="form-box p-3">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="person-info px-2">
                    <input
                      type="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      className="form-control m-1"
                    />
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      className="form-control m-1"
                    />
                  </div>
                  <div className="massage px-2">
                    <textarea
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      cols="90"
                      rows="3"
                      className="form-control m-1"
                      placeholder="Write your massage..."
                    ></textarea>
                  </div>
                  <div className="button mx-2">
                    <input
                      type="submit"
                      value="Send"
                      className="btn btn-light m-1"
                    />
                    <span className="mx-2">{confirm}</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </div>
  );
};

export default Footer;
