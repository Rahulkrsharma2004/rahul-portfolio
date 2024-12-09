
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../Styles/Contact.css";
import workTogether from "../assets/workTogether.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData, "form data")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "on line no. 133 form data")
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID,process.env.REACT_APP_EMAILJS_TEMPLATE_ID,process.env.REACT_APP_EMAILJS_PUBLIC_KEY,"134 console")
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send email. Please try again later.");
      });
  };

  return (
    <section id="contact">
      <div className="contactMainContainer">
        <h1 className="contactHeading">Contacts</h1>
        <div className="contactContainer">
          <div className="contactInputContainer">
            <form id="mailForm" onSubmit={handleSubmit}>
              <div className="contactInp">
                <label htmlFor="name">Name</label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Your Name..."
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contactInp">
                <label htmlFor="email">Email</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Your Email..."
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contactInp">
                <label htmlFor="message">Message</label>
                <textarea
                  className="input"
                  name="message"
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="SendBtn" type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="contactDetailsContainer">
            <div className="contactDetails">
              <a href="mailto:kumarrahulbasdiha@gmail.com" target="blank">
                <div className="contactImgDiv">
                  <img
                    className="contactImg"
                    src="https://www.svgrepo.com/show/488920/email.svg"
                    alt="Email"
                  />
                </div>
              </a>
              <div className="ccontactText">kumarrahulbasdiha@gmail.com</div>
            </div>
            <div className="contactDetails">
              <a href="tel:8084906496" target="blank">
                <div className="contactImgDiv">
                  <img
                    className="contactImg"
                    src="https://www.svgrepo.com/show/521544/call-receive.svg"
                    alt="Call"
                  />
                </div>
              </a>
              <div className="ccontactText">8084906496</div>
            </div>
            <div className="contactDetails">
              <a>
                <div className="contactImgDiv">
                  <img
                    className="contactImg"
                    src="https://www.svgrepo.com/show/532539/location-pin.svg"
                    alt="Location"
                  />
                </div>
              </a>
              <div className="ccontactText">Patna , Bihar</div>
            </div>
            <div className="contactDetails">
              <a href="https://github.com/Rahulkrsharma2004" target="blank">
                <div className="contactImgDiv">
                  <img
                    className="contactImg"
                    src="https://www.svgrepo.com/show/453763/github.svg"
                    alt="Github"
                  />
                </div>
              </a>
              <div className="ccontactText">Github</div>
            </div>
            <div className="contactDetails">
              <a
                href="https://www.linkedin.com/in/rahul-kr-sharma-35a989280/"
                target="blank"
              >
                <div className="contactImgDiv">
                  <img
                    className="contactImg"
                    src="https://www.svgrepo.com/show/447416/linkedin.svg"
                    alt="Linkedin"
                  />
                </div>
              </a>
              <div className="ccontactText">LinkedIn</div>
            </div>
          </div>
          <div className="contactImgContainer">
            <h1 className="contactUsHeading">Let's work together</h1>
            <img
              className="contactUsImg"
              src="https://routemobile.com/wp-content/uploads/2021/07/partneship-banner.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
