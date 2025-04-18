// src/page/Home.jsx
import React from 'react';
import icon1 from '../img/mark.png'; 
import icon2 from '../img/mark.png'; 
import icon3 from '../img/mark.png'; 
import icon4 from '../img/mark.png'; 
import icon5 from '../img/mark.png'; 
import icon6 from '../img/mark.png'; 
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <>
        <div className="main-content">
                    <Sidebar />
                    <main className="page-content">
                        {/* Блок с описанием и преимуществами */}
                        <div className="description">
                            <h2>Освой программирование и IT с нуля до профессионала</h2>
                            <p>
                                Преврати знания в карьеру! "Don't Be a Monkey" – это современная онлайн-платформа
                                для изучения программирования и IT-технологий. Мы поможем тебе стать востребованным
                                специалистом в мире технологий, даже если ты начинаешь с нуля.
                            </p>
                        </div>

                        <div className="advantages">
                            <h2>Почему выбирают нас?</h2>
                            <ul className="advantages-list">
                                <li>
                                    <img src={icon1} alt="Интерактивное обучение" />
                                    <span>Интерактивное обучение – практикуй код прямо в браузере, выполняй реальные проекты.</span>
                                </li>
                                <li>
                                    <img src={icon2} alt="Персонализированные курсы" />
                                    <span>Персонализированные курсы – выбирай путь обучения, который подходит именно тебе.</span>
                                </li>
                                <li>
                                    <img src={icon3} alt="Карьерный рост" />
                                    <span>Карьерный рост – помощь с трудоустройством, вакансии от партнеров.</span>
                                </li>
                                <li>
                                    <img src={icon4} alt="Живое комьюнити" />
                                    <span>Живое комьюнити – обсуждения, совместные проекты, менторы.</span>
                                </li>
                                <li>
                                    <img src={icon5} alt="Гибкие подписки" />
                                    <span>Гибкие подписки – месяц, год или полный доступ ко всем курсам.</span>
                                </li>
                                <li>
                                    <img src={icon6} alt="Геймификация" />
                                    <span>Геймификация – бейджи, рейтинги, челленджи для мотивации.</span>
                                </li>
                            </ul>
                        </div>
                    </main>
                </div>
            <div className="description">
                <h2>Освой программирование и IT с нуля до профессионала</h2>
                <p>
                    Преврати знания в карьеру! "Don't Be a Monkey" – это современная онлайн-платформа
                    для изучения программирования и IT-технологий. Мы поможем тебе стать востребованным
                    специалистом в мире технологий, даже если ты начинаешь с нуля.
                </p>
            </div>

            <div className="advantages">
                <h2>Почему выбирают нас?</h2>
                <ul className="advantages-list">
                    <li><img src={icon1} alt="Интерактивное обучение" /><span>Интерактивное обучение – практикуй код прямо в браузере, выполняй реальные проекты.</span></li>
                    <li><img src={icon2} alt="Персонализированные курсы" /><span>Персонализированные курсы – выбирай путь обучения, который подходит именно тебе.</span></li>
                    <li><img src={icon3} alt="Карьерный рост" /><span>Карьерный рост – помощь с трудоустройством, вакансии от партнеров.</span></li>
                    <li><img src={icon4} alt="Живое комьюнити" /><span>Живое комьюнити – обсуждения, совместные проекты, менторы.</span></li>
                    <li><img src={icon5} alt="Гибкие подписки" /><span>Гибкие подписки – месяц, год или полный доступ ко всем курсам.</span></li>
                    <li><img src={icon6} alt="Геймификация" /><span>Геймификация – бейджи, рейтинги, челленджи для мотивации.</span></li>
                </ul>
            </div>
        </>
    );
};

export default Home;
