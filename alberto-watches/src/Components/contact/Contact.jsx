import React from 'react';
import './contact.css'

const Contact = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Contact Us</h1>

      <div className="contact-info">
        <h2>Alberto Watch Company</h2>

        <p className="contact-item">
          <strong>Email:</strong> info@albertowatchco.com
        </p>

        <p className="contact-item">
          <strong>Address:</strong> 1415 SW 47TH Ter Fort Lauderdale,
                                     FL, 33317-5622 United States 
        </p>

        <p className="contact-item">
          <strong>Contact Number:</strong> (124) 123-4567
        </p>

        <p className="contact-description">
          Feel free to reach out to us for any inquiries about our watch repair services,
          appraisals, or our luxury timepiece collection.
        </p>

      </div>
      
    </div>
  );
};

export default Contact;