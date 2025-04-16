import React from 'react';
import './Course.css'; // Стили для страницы курса
import photo1 from '../img/1.png';
import photo2 from '../img/2.png';
import photo3 from '../img/3.png';
import photo4 from '../img/4.png';
const Course = () => {
    return (
        <div className="course-page">
            <h2>Наши курсы</h2>
            <div className="courses">
                <div className="course-item">
                    <img src={photo1} alt="Логотип" className="course-image" />
                    <p className="course-caption">Курс по React</p>
                </div>
                <div className="course-item">
                    <img src={photo2} alt="Логотип" className="course-image" />
                    <p className="course-caption">Курс по JavaScript</p>
                </div>
                <div className="course-item">
                    <img src={photo3} alt="Логотип" className="course-image" />
                    <p className="course-caption">Курс по Python</p>
                </div>
                <div className="course-item">
                    <img src={photo4} alt="Логотип" className="course-image" />
                    <p className="course-caption">Курс по Data Science</p>
                </div>
            </div>
        </div>
    );
};

export default Course;
