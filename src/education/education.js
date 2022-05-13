import React from 'react';
import '../style.scss';

function Education() {
  return (
    <div className="content-section" id="about">
      <p className="content-name">Education</p>
      <div className="education-div">
        <h2 className="school-name">Dartmouth College, Hanover, NH</h2>
        <p className="degree">Bachelor of Arts in <i>Computer Science</i></p>
        <p className="year">2019-2023</p>
      </div>
      <div className="about" />
    </div>
  );
}

export default Education;
