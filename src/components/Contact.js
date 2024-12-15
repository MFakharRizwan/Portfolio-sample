import React from 'react';
import './contactme.css';

const Contact = () => {
  return (
    <div id="contact" className="resume-container"> {/* Add the id="contact" */}
      {/* Left Side: Description and Download Button */}
      <div className="resume-left">
        <h2 className="resume-title">Get in Touch & Download My Resume</h2>
        <p className="resume-description">
          Click the button below to download a copy of my resume. Feel free to
          reach out for any questions or opportunities.
        </p>
        <a
          href="/fakhar.pdf" // Path to your CV file in the public folder
          download="fakharResume.pdf" // Suggested download name
          className="download-btn"
        >
          Download Resume
        </a>
      </div>

      {/* Right Side: Resume Viewer */}
      <div className="resume-right">
        <object
          data="/fakhar.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
          className="resume-embed"
        >
          <p>
            Your browser does not support viewing PDFs. You can download the resume{" "}
            <a href="/fakhar.pdf" download="fakhar.pdf">
              here
            </a>.
          </p>
        </object>
      </div>
    </div>
  );
};

export default Contact;





