import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <p>
        I am a senior at Virginia Commonwealth University studying Computer Science with a minor in Computer Engineering, graduating in May 2026.
        I specialize in software development in Java, Python, and C, with growing expertise in embedded systems software and low-level language programming. I also hold an active TS/SCI security clearance as of May 2025.
      </p>
      <p>
        My background includes two software internships at AMC Technology, where I worked with AI integration, APIs, agile software practices, and Model Context Protocol. Alongside this I have worked on academic projecs in my own time, including planetary phyics simulation in C and some hackathons, winning 2nd place in one and placing in a few others.
        I am currently working on hardware-software integration using a Raspberry Pi Pico with sensor systems. Outside of coding, I am also a tutor and teaching assistant, helping break down complex concepts for many students and helping them learn for themselves. 
      </p>
      <p>
        I am passionate about applying software to real-world systems, particularly in aerospace and machine learning, but I am also excited about all opportunities across software engineering. 
        My journey to become a software developer was not the traditional route, as I originally started out pre-med, completing a biology dgree and taking the MCAT, scoring a 518, before realizing that what I wanted was to create and solve problems in a different way.
        However, my experience throughout my pre-med path has given me a lot of valuable experience, adaptability, and discipline.
      </p>
    </section>
  );
};

export default AboutMe;