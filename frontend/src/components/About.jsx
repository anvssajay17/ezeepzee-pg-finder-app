
import React from 'react';
import './styles/About.css';

import chennai from '/images/chennai.jpeg';
import mumbai from '/images/mumbai.jpeg';
import hyd from '/images/hyd.jpeg';
import ai from '/images/ahe.jpeg';

const About = () => {
  return (
    <div id="about" className='aboutContainer'>
      <h1 className='aboutus'> About Us</h1>
    <div className="container">
      <div className="contentLeft">
        <div className="row">
          <div className="imgWrapper">
            <img src={chennai} alt="Chennai" />
          </div>
          <div className="imgWrapper">
            <img src={mumbai} alt="Mumbai" />
          </div>
          <div className="imgWrapper">
            <img src={hyd} alt="Hyderabad" />
          </div>
          <div className="imgWrapper">
            <img src={ai} alt="AI" />
          </div>
        </div>
      </div>
      <div className="contentRight">
        <div className="content">
          <h4>Welcome To</h4>
          <h2>ezeepzee</h2>
          <p>
             Everyone deserves a smooth start when moving to a new city. Whether you're a student or a working professional, finding a trusted and affordable PG shouldn’t be a struggle. We make it easy to discover comfortable stays in crowded urban areas.
          </p>
      
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
