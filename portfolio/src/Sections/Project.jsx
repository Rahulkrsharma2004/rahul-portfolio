import React from "react";
import "../Styles/Project.css";
import myntraImg from "../assets/myntraImage.png";
import tmetricImg from "../assets/tmetricImage.png";
import calendarimg from "../assets/calendarimg.PNG";
import infinite from "../assets/infinteimg.PNG";
import ecomImg from "../assets/ecomImage.png";
import AIimage from "../assets/AIimage.png";

const Project = () => {
  return (
    <section id="projects">
      <div className="projectMainContainer">
        <h1 className="projectHeading">Projects</h1>
        <div className="projectsDiv">
          <div className="projectCard">
            <h3 className="projectNameText"> Myntra Clone</h3>
            <div className="projectImageDiv">
              <img src={myntraImg} alt="myntraimg" className="projectImage" />
            </div>
            <div className="description-techStackDiv">
              <div className="projectDescriptionDiv">
                <h3>Description</h3>
                <h4>
                  Myntra is a one stop shop for all your fashion and lifestyle
                  needs. Being India's largest e-commerce store for fashion and
                  lifestyle products.
                </h4>
              </div>
              <div className="projectBtnsDiv">
                <a href="https://myntra-project-nu.vercel.app/" target="_blank">
                  <button className="projectBtns">Live</button>
                </a>
                <a
                  href="https://github.com/Rahulkrsharma2004/Myntra-Full-App-Clone"
                  target="_blank"
                >
                  <button className="projectBtns">Github</button>
                </a>
              </div>
              <div className="projectTechStackDiv">
                <h3>Tech-Stack</h3>
                <h4>
                  Node.js <br /> Express.js <br /> React <br /> CSS3 <br /> Java
                  Script <br /> HTML5 <br />
                </h4>
              </div>
            </div>
          </div>
          <div className="projectCard">
            <h3 className="projectNameText">Google-Calendar</h3>
            <div className="projectImageDiv">
              <img src={calendarimg} alt="" className="projectImage" />
            </div>
            <div className="description-techStackDiv">
              <div className="projectDescriptionDiv">
                <h3>Description</h3>
                <h4>
                  This project demonstrates the integration of Google Calendar
                  with a web application, allowing users to authenticate using
                  their Google account and create Event.
                </h4>
              </div>
              <div className="projectBtnsDiv">
                <a
                  href="https://google-calendar-rks.netlify.app"
                  target="_blank"
                >
                  <button className="projectBtns">Live</button>
                </a>
                <a
                  href="https://github.com/Rahulkrsharma2004/Google-Calendar"
                  target="_blank"
                >
                  <button className="projectBtns">Github</button>
                </a>
              </div>
              <div className="projectTechStackDiv">
                <h3>Tech-Stack</h3>
                <h4>
                  Node.js <br /> MongoDB <br /> Express <br /> React <br />
                  Google-Authentication <br />
                  Google-Calendar-API
                </h4>
              </div>
            </div>
          </div>
          <div className="projectCard">
            <h3 className="projectNameText">Virtual Assistant</h3>
            <div className="projectImageDiv">
              <img src={AIimage} alt="" className="projectImage" />
            </div>
            <div className="description-techStackDiv">
              <div className="projectDescriptionDiv">
                <h3>Description</h3>
                <h4>
                  This is a simple virtual assistant web application. The
                  assistant can respond to various voice commands, perform
                  actions like opening websites.
                </h4>
              </div>
              <div className="projectBtnsDiv">
                <a
                  href="https://virtual-assistantrk.vercel.app"
                  target="_blank"
                >
                  <button className="projectBtns">Live</button>
                </a>
                <a
                  href="https://github.com/Rahulkrsharma2004/Virtual-Assistant"
                  target="_blank"
                >
                  <button className="projectBtns">Github</button>
                </a>
              </div>
              <div className="projectTechStackDiv">
                <h3>Tech-Stack</h3>
                <h4>
                  HTML5 <br /> CSS <br /> Java Script <br />
                  speech-recognition <br />
                  speech-to-text <br />
                  responsive
                </h4>
              </div>
            </div>
          </div>
          <div className="projectCard">
            <h3 className="projectNameText">infinitetutelage</h3>
            <div className="projectImageDiv">
              <img src={infinite} alt="" className="projectImage" />
            </div>
            <div className="description-techStackDiv">
              <div className="projectDescriptionDiv">
                <h3>Description</h3>
                <h4>
                  This project is built with React and chart.js, offering a
                  responsive and interactive user interface. The design and
                  styling are meticulously crafted in Figma.
                </h4>
              </div>
              <div className="projectBtnsDiv">
                <a href="https://infinite-rahul.vercel.app" target="_blank">
                  <button className="projectBtns">Live</button>
                </a>
                <a
                  href="https://github.com/Rahulkrsharma2004/infinitetutelage-assignment"
                  target="_blank"
                >
                  <button className="projectBtns">Github</button>
                </a>
              </div>
              <div className="projectTechStackDiv">
                <h3>Tech-Stack</h3>
                <h4>
                  React <br /> CSS <br /> Java Script <br /> HTML5 <br />
                  chart.js <br />
                  figma <br />
                </h4>
              </div>
            </div>
          </div>
          <div className="projectCard">
            <h3 className="projectNameText">TMetric Website</h3>
            <div className="projectImageDiv">
              <img src={tmetricImg} alt="" className="projectImage" />
            </div>
            <div className="description-techStackDiv">
              <div className="projectDescriptionDiv">
                <h3>Description</h3>
                <h4>
                  your best business companion for breakthrough results and its
                  time tracking website Powerful time tracker that lets you
                  focus on work that matters.
                </h4>
              </div>
              <div className="projectBtnsDiv">
                <a href="https://rahultmetric.netlify.app/" target="_blank">
                  <button className="projectBtns">Live</button>
                </a>
                <a
                  href="https://github.com/Rahulkrsharma2004/TMetric-Website-"
                  target="_blank"
                >
                  <button className="projectBtns">Github</button>
                </a>
              </div>
              <div className="projectTechStackDiv">
                <h3>Tech-Stack</h3>
                <h4>
                  React <br /> CSS <br />
                  HTML
                  <br /> Java Script <br /> Json <br />
                  Redux
                </h4>
              </div>
            </div>
          </div>
          <div className="projectCard">
            <h3 className="projectNameText">E-Commerce Website</h3>
            <div className="projectImageDiv">
              <img src={ecomImg} alt="" className="projectImage" />
            </div>
            <div className="description-techStackDiv">
              <div className="projectDescriptionDiv">
                <h3>Description</h3>
                <h4>
                  This is E-Commerce website for buying Fashionable clothes and
                  also for electronics , jewellery.It is also for Online shoping
                  and online services.
                </h4>
              </div>
              <div className="projectBtnsDiv">
                <a href="https://e-commerce-rks.netlify.app/" target="_blank">
                  <button className="projectBtns">Live</button>
                </a>
                <a
                  href="https://github.com/Rahulkrsharma2004/Revision-React-2/tree/main/E-Commerce-app"
                  target="_blank"
                >
                  <button className="projectBtns">Github</button>
                </a>
              </div>
              <div className="projectTechStackDiv">
                <h3>Tech-Stack</h3>
                <h4>
                  React
                  <br />
                  HTML <br /> CSS <br /> Java Script <br />
                  Chakra-UI <br />
                  Responsive
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
