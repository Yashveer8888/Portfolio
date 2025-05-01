import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "MERN Stack Developer",
          "DSA Problem Solver",
          "Open Source Contributor",
          "Machine Learning Enthusiast",
          "Full Stack Web Developer",
          "Competitive Programmer",
          "API Integration Specialist",
          "React & Node.js Enthusiast",
          "Cybersecurity Learner",
          "Database Designer",
          "Python Programmer",
          "Problem Solving Enthusiast",
          "CSE Undergrad",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
