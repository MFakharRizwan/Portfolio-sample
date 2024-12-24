import React from 'react';
import './skills.css'; // Custom styles

const skills = [
  { name: 'React Native', experience: '6 Months Experience' },
  { name: 'CSS/HTML', experience: '1.5 Years Experience' },
  { name: 'NodeJS', experience: '1.5 Years Experience' },
  { name: 'Bootstrap', experience: '1.5 Years Experience' },
  { name: 'ReactJS', experience: '1.5 Years Experience' },
  { name: 'MongoDB', experience: '1.5 Years Experience' }
];

const Skills = () => {
  return (
    <section id="SkillsComponent" className="skills-section"> {/* Add id="SkillsComponent" */}
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className={`skill-card ${index === 4 ? 'big-card' : ''}`}>
            <h3>{skill.name}</h3>
            <p>{skill.experience}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

