import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {

  return (
    <section className="hero">
      <h1>Rishi Ganesh</h1>
      <p>
        Senior at VCU, Computer Science Major with Computer Engineering Minor, Graduate May 2026. Currently looking for full-time employment
      </p>
      <div className="buttons">
        <Link to="/projects" className="btn">View Projects</Link>
        <a href={`${import.meta.env.BASE_URL}/CSResume.pdf`} className="btn" download = "Rishi_Ganesh_Resume.pdf">Download Resume</a>
      </div>
    </section>
  );
};

export default HeroSection;