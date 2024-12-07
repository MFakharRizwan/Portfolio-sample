import React from "react";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      year: "2025",
      degree: "Bachelor of Computer Science (BSCS)",
      institution: "Shaheed Zulfikar Ali Bhutto Institute of Science and Technology.",
    },
    {
      year: "2018-2019",
      degree: "Higher Secondary School Certificate (ICS)",
      institution: "Islamabad Model College For Boys H-9 Islamabad.",
    },
    {
      year: "2016-2017",
      degree: "Secondary School Certificate",
      institution: "FG Boys Public School Westridge-1 Rawalpindi.",
    },
  ];

  return (
    <section id="education" className="education">
      <h2 className="education-title">Education</h2>
      <div className="education-container">
        {educationData.map((item, index) => (
          <div key={index} className="education-card">
            <div className="education-year">{item.year}</div>
            <div className="education-details">
              <h3 className="education-degree">
                <span className="degree-icon">🎓</span> {item.degree}
              </h3>
              <p className="education-institution">{item.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
