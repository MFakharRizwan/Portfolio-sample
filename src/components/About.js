import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const About = () => {
  const aboutRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the component is in view
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className={`about-container ${inView ? "animate-in" : ""}`}
      id="about"
    >
      {/* Left Floating Tags */}
      <div className="about-tag" style={{ top: "30%", left: "5%" }}>
        Programming
      </div>
      <div className="about-tag" style={{ top: "42%", left: "3%" }}>
        ReactJS
      </div>
      <div className="about-tag" style={{ top: "55%", left: "4%" }}>
        React Native
      </div>

      {/* Center Content */}
      <div className="about-content">
        <p className="hello-text">
          <em>Hello!</em>
        </p>
        <h1 className="heading">
          I am a MERN Stack web developer specialized in ReactJS. Plus, I also
          know React Native front-end development with Expo. Programming is my
          passion, and I enjoy it at the core of my academic career.
        </h1>
        <p className="description">
          Additionally, I like to play PC games and read story-type books in my
          leisure time, which is kind of fun and relaxing!
        </p>
      </div>

      {/* Right Floating Tags */}
      <div className="about-tag" style={{ top: "30%", right: "5%" }}>
      Web Development
      </div>
      <div className="about-tag" style={{ top: "45%", right: "3%" }}>
        Expo
      </div>
      <div className="about-tag" style={{ top: "60%", right: "4%" }}>
        Story Books
      </div>
    </div>
  );
};

export default About;


