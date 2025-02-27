import React from 'react';
import './about.css'

const About = () => {
  return (

    <div className="page-container">
      <h1 className="page-title">About Us</h1>

      <div className="about-info">
        <h2>Alberto Watch Company</h2>

        <p className="about-description">
          Alberto Watch Company is a full-service watch repair, appraisal, and retail store –
          offering only the best selection of luxury timepieces. 
          We take pride in our ability to provide the finest quality, be it of products or
          services. You won't regret reaching out to us to if you do. 
        </p>

        <p className="about-description">
          Alberto also possesses a plethora of brand new watches; not limited to but including 
          Michael Kors, Rolex, Citizen EcoDrive, Bulova, and much more! Our experienced and 
          knowledgeable staff is 100% dedicated to providing exceptional service and expertise 
          in all things timepieces. What are you waiting for? <br></br><strong>Patronise us today!</strong>
        </p>

        <div className="contact-details">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> info@albertowatchco.com</p>
          <p><strong>Address:</strong> 1415 SW 47TH Ter Fort Lauderdale, FL, 33317-5622 United States </p>
          <p><strong>Contact Number:</strong> (124) 123-4567</p>
        </div>

      </div>
      
    </div>
  );
};

export default About;