import React from "react";
import "../Styles/Project.css";

const Project = () => {
  return (
    <section id="projects">
      <div className="projectMainContainer">
        <h1 className="projectHeading">Projects</h1>
        <div className="projectsDiv">
          <div className="projectCard">
            <h3 className="projectNameText">Fiverr Clone</h3>
            <div className="projectVideoDiv">
              <video className="projectVideo" autoPlay loop muted>
                <source src={fiverrProjectVideo} type="video/mp4" />
              </video>
            </div>
            <div className="description-techStackDiv">
              <div className="projectDescriptionDiv">
                <h3>Description</h3>
                <h4>
                  The Fiverr website is a globally recognized online marketplace
                  that connects freelancers with clients who need their
                  services.
                </h4>
              </div>
              <div className="projectBtnsDiv">
                <a
                  href="https://fiverr-clone-murtaza.netlify.app/"
                  target="_blank"
                >
                  <button className="projectBtns">Live</button>
                </a>
                <a
                  href="https://github.com/Mohd-Murtaza/Fiverr_Backend"
                  target="_blank"
                >
                  <button className="projectBtns">Github</button>
                </a>
              </div>
              <div className="projectTechStackDiv">
                <h3>Tech-Stack</h3>
                <h4>
                  Node.js <br /> Express.js <br /> React <br /> CSS <br /> Java
                  Script <br /> Chakra UI <br />
                </h4>
              </div>
            </div>
          </div>
          <div className="projectCard">
            <h3 className="projectNameText">Expedia Clone</h3>
            <div className="projectVideoDiv">
              <video className="projectVideo" autoPlay loop muted>
                <source src={expediaProjectVideo} type="video/mp4" />
              </video>
            </div>
            <div className="description-techStackDiv">
              <div className="projectDescriptionDiv">
                <h3>Description</h3>
                <h4>
                  The Expedia website can be used to book airline tickets, hotel
                  reservations, car rentals, cruise ships, and vacation
                  packages.
                </h4>
              </div>
              <div className="projectBtnsDiv">
                <a
                  href="https://melodious-sundae-7dc4a5.netlify.app/"
                  target="_blank"
                >
                  <button className="projectBtns">Live</button>
                </a>
                <a
                  href="https://github.com/Mohd-Murtaza/Expedia-Project"
                  target="_blank"
                >
                  <button className="projectBtns">Github</button>
                </a>
              </div>
              <div className="projectTechStackDiv">
                <h3>Tech-Stack</h3>
                <h4>
                  React <br /> CSS <br /> Java Script <br /> Json{" "}
                </h4>
              </div>
            </div>
          </div>
          <div className="projectCard">
            <h3 className="projectNameText">E-Commerce Website</h3>
            <div className="projectImageDiv">
              <img src={ecomImg} alt="" className="projectImage"/>
            </div>
            <div className="description-techStackDiv">
              <div className="projectDescriptionDiv">
                <h3>Description</h3>
                <h4>
                This is E-Commerce website for buying Fashionable clothes and also for electronics , jewellery.It is also for Online shoping and online services.
                </h4>
              </div>
              <div className="projectBtnsDiv">
                <a
                  href="https://e-commerce-rks.netlify.app/"
                  target="_blank"
                >
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
                  HTML <br /> CSS <br /> Java Script <br />Chakra-UI
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
