/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../style.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import myimage from '../assets/portfolioimg-modified.png';

function About() {
  return (
    <div className="content-section">
      <p className="content-name">About</p>
      <div className="image-holder">
        <img src={myimage} alt="me" />
      </div>
      <p className="about-text">
        Hello! I&apos;m Jefferson William Akesseh, a senior at Dartmouth College studying computer science.
        I have a deep passion for software development, particularly mobile app and front end development.
      </p>
      <p className="tech-intro"> I have experience in the following technologies:</p>
      <ul>
        <li className="tool-list">Java</li>
        <li className="tool-list">Javascript</li>
        <li className="tool-list">Python</li>
        <li className="tool-list">TypeScript</li>
        <li className="tool-list">React</li>
        <li className="tool-list">Angular JS</li>
      </ul>
      {/* <p className="text-body"> I love to play video games and learn the guitar in my free time.
      </p> */}
      <p className="contact-body">I can be reached on wakesseh@gmail.com.</p>
      <div className="footer">
        <IconButton
          aria-label="Github.com"
          onClick={() => window.open('https://github.com/jeffersonwilliam', '_blank')}
        >
          <GitHubIcon id="g" fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="Linkedin.com"
          onClick={() => window.open('https://www.linkedin.com/in/jefferson-william-akesseh/', '_blank')}
        >
          <LinkedInIcon id="l" fontSize="large" />
        </IconButton>
      </div>
      <div />
    </div>
  );
}

export default About;
