// src/pages/Courses.jsx

import React from "react";
import "../styles/About.css";
import logo from '../images/monkey.png'
const About = () => {
  return (
    <div className="courses-page">
      <h2>Наши курсы</h2>
      <p>Изучай актуальные технологии вместе с нами и строй карьеру в IT!</p>

      <div className="courses-list">
        <div className="course-card">
          <h3>Веб-разработка</h3>
          <p>HTML, CSS, JavaScript, React, Node.js</p>
        </div>
        <div className="course-card">
          <h3>Мобильная разработка</h3>
          <p>Flutter, Kotlin, Swift</p>
        </div>
        <div className="course-card">
          <h3>Аналитика данных</h3>
          <p>Python, машинное обучение, BI-системы</p>
        </div>
        <div className="course-card">
          <h3>DevOps и автоматизация</h3>
          <p>Docker, Kubernetes, CI/CD</p>
        </div>
      </div>
    </div>
  );
};

export default About;
