import React from 'react'
import './style.css'
import  sideimage from './my-pic-bg2.png';
const About = () => {
  return (
    <>
      <div id="welcome-sec">
            <div className="text-sec">
                <h6>Hey! I'm </h6>
                <h1 className="text-name">Raheel ahmed</h1>
                <h3>A professional </h3>
                <span className="skill-name">frontend developer</span>
            </div>

            <div className="image-sec">
                <div className="portfolio-img">
                    <img src={sideimage} />
                </div>
                <div className="profile-links">
                    <a href="https://github.com/raheelahmed99" target="_blank"><i className="fa-brands fa-square-github fa-xl fa-fade"></i></a>
                    <a href="https://www.linkedin.com/in/raheel-ahmed-b9204514b/" target="_blank"><i className="fa-brands fa-linkedin fa-xl fa-fade"></i></a>
                    <div className="btn-cv"><a href="https://drive.google.com/file/d/1LuwMtzbezAXAt08nzxrQrd5cGygvXIr0/view?usp=sharing" target="_blank">Resume</a><i  className="fa-solid fa-download fa-xl fa-flip"></i>
                    </div>
                </div>
        </div>
        </div>
        
    </>
  )
}

export default About
