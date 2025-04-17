import React from 'react';
import Footer from '../components/Footer'
import employment from '../img/employment.png';
import './Employment.css'
const Employment = () => {
    return (
        <div className="employment-page">
            <h1>Центр трудоустройства</h1>
            <p>Мы поможем тебе найти работу своей мечты!</p>
            <img src={employment} alt="Картинка с обезьяной" className="map-image" />

            <div className="career-info">
                <h2>Начни карьеру в IT с нами!</h2>
                <p>
                    Мы не просто учим – мы помогаем тебе найти работу в IT! Пройди обучение, собери портфолио и получи
                    доступ к вакансиям от наших партнеров. Мы подготовим тебя к успешному трудоустройству.
                </p>
            </div>

            <div className="career-info">
                <h2>🚀 Что мы предлагаем?</h2>
                <ul>
                    <li>Подготовка к собеседованиям – тренировки, разбор технических вопросов и soft skills.</li>
                    <li>Реальные проекты – возможность работать над задачами из IT-индустрии.</li>
                    <li>Рекомендации от платформы – выделяйся среди кандидатов благодаря сертификатам и кейсам.</li>
                    <li>Партнерские вакансии – эксклюзивные предложения от топовых компаний.</li>
                    <li>Резюме и LinkedIn – поможем создать профессиональный профиль для успешного старта.</li>
                </ul>
                <p>
                    Мы сотрудничаем с ведущими IT-компаниями, которые ищут талантливых разработчиков, аналитиков,
                    DevOps-инженеров и других специалистов.
                </p>
                <p>
                    <strong>Хотите разместить вакансию?</strong> Пишите нам на <a href="mailto:jobs@dontbeamonkey.com">jobs@dontbeamonkey.com</a>
                </p>

                <div className="employment-buttons">
                    <button className="start-btn">Начать обучение</button>
                    <button className="jobs-btn">Посмотреть вакансии</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Employment;