import React,{useEffect} from "react";
import "../Styles/Education.css";
import education from "../assets/education.png";
import masai from "../assets/masai.png";
import BSEB from "../assets/BSEB.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in',
      delay: 100,
    });
  },[])
  return (
    <section id="education">
      <div className="educationMainContainer">
        <h1 className="educationHeading">Education</h1>
        <div className="educationContainer">
          <img className="educationVector" src={education} alt="" />
          <div className="educationCardsMainCont">
            <div data-aos="fade-up">
              <div className="educationCard">
                <div className="educationCardImgDiv">
                  <img className="schoolsImg" src={masai} alt="" />
                </div>
                <div className="educationCardTextDiv">
                  <span className="educationDurationText">2023 - 2024</span>
                  <h3 className="educationSchoolText">
                    Full Stack Web Development (MERN)
                  </h3>
                  <h3 className="educationSchoolText">
                    Masai School, Bangalore
                  </h3>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="educationCard">
                <div className="educationCardImgDiv">
                  <img className="schoolsImg" src={BSEB} alt="" />
                </div>
                <div className="educationCardTextDiv">
                  <span className="educationDurationText">2022 - 2025</span>
                  <h3 className="educationSchoolText">Bachelor of Science in
                  Mathematics</h3>
                  <h3 className="educationSchoolText">Patliputra University Patna</h3>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="educationCard">
                <div className="educationCardImgDiv">
                  <img className="schoolsImg" src={BSEB} alt="" />
                </div>
                <div className="educationCardTextDiv">
                  <span className="educationDurationText">2020-2022</span>
                  <h3 className="educationSchoolText">Intermediate in Science</h3>
                  <h3 className="educationSchoolText">A.N. College Patna</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
