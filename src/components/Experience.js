import React from "react";
import "./experience.css";

const ExperiencePortfolio = () => {
  const experienceData = [
    {
      year: "August 2023 - March 2024",
      title: "Frontend Developer",
      description:
        "RainyDayLab Technologies. Led the development of highly responsive and dynamic web applications utilizing React.js and modern JavaScript frameworks. Streamlined web performance, achieving significant improvements in page load times by employing advanced coding practices and efficient asset management strategies. Designed and implemented reusable, scalable UI components to accelerate development workflows while maintaining a cohesive and consistent design system across projects.",
    },
    {
      year: "June 2023 - July 2023",
      title: "Intern at PTCL",
      description:
        "Successfully contributed to the development of efficient storage management strategies, leading to a 70% improvement in resource allocation. Prepared detailed reports on system performance and suggested actionable improvements for resource utilization. Collaborated with team members to enhance operational workflows and deliver timely solutions for technical challenges.",
    },
  ];

  return (
    <section id="ExperiencePortfolio" className="experience-portfolio">
      <h2 className="portfolio-heading">Experience Timeline</h2>
      <div className="timeline-container">
        {experienceData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencePortfolio;

