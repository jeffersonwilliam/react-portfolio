import React from 'react';
import '../style.scss';
import google from '../assets/google.png';
import uber from '../assets/uber.jpeg';
import amazon from '../assets/amazon.png';

function Work() {
  return (
    <div className="content-section" id="about">
      <p className="content-name">Work</p>
      <div className="work-div">
        <div className="company">
          <img className="company-logos" alt="uber logo" src={uber} />
          <div className="job-info">
            <p className="job-title">Uber Software Engineer Intern</p>
            <p>June 2022 - September 2022</p>
          </div>
        </div>
        <div className="company">
          <img className="company-logos" alt="amazon logo" src={amazon} />
          <div className="job-info">
            <p className="job-title">Amazon Software Development Engineer Intern</p>
            <p>June 2021 - September 2021</p>
          </div>
        </div>
        <div className="sub-section">Other Experience</div>
        <div className="company experience">
          <img className="company-logos" alt="google logo" src={google} />
          <div className="job-info">
            <p className="job-title">Google Software Product Sprint Participant</p>
            <p>June 2021 - August 2021</p>
          </div>
        </div>
      </div>
      <div className="about" />
    </div>
  );
}

export default Work;
