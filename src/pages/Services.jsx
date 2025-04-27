// src/pages/Employment.jsx

import React from "react";
import "../styles/Services.css";
import about from '../images/about.png'
const Services = () => {
  return (
    <div className="employment-page">
      <img src={about} alt="Трудоустройство" className="employment-image" />

      <div className="employment-content">
        <h2>Начни карьеру в IT с нами!</h2>
        <p>
          Мы не просто учим – мы помогаем тебе найти работу в IT! Пройди обучение, собери портфолио и получи доступ к вакансиям от наших партнеров. Мы подготовим тебя к успешному трудоустройству.
        </p>

        <h3>🚀 Что мы предлагаем?</h3>
        <ul>
          <li>Подготовка к собеседованиям – тренировки, разбор технических вопросов и soft skills.</li>
          <li>Реальные проекты – возможность работать над задачами из IT-индустрии.</li>
          <li>Рекомендации от платформы – выделяйся среди кандидатов благодаря сертификатам и кейсам.</li>
          <li>Партнерские вакансии – эксклюзивные предложения от топовых компаний.</li>
          <li>Резюме и LinkedIn – поможем создать профессиональный профиль для успешного старта.</li>
        </ul>

        <p className="employment-footer">
          Мы сотрудничаем с ведущими IT-компаниями, которые ищут талантливых разработчиков, аналитиков, DevOps-инженеров и многих других специалистов.
        </p>

        <p className="employment-contact">
          Хотите разместить вакансию? Пишите нам на <a href="mailto:jobs@dontbeamonkey.com">jobs@dontbeamonkey.com</a> <br/>
          Готов к первому шагу? Начни обучение и двигайся к мечте! <a href="/vacancies">[Посмотреть вакансии]</a>
        </p>
      </div>
    </div>
  );
};

export default Services;
