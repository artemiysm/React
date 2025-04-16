import React from 'react';
import './Sidebar.css';
import banner from '../img/banner.png'; // Одна общая картинка

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="banner">
                <img src={banner} alt="Баннер" className="banner-image" />
                <span className="banner-text">
                    Найди себя и <br /> профессию <br /> в DBA Monkey
                </span>
            </div>
            <div className="description">
                <h2>Освой программирование и IT с нуля до профессионала</h2>
                <p>
                    Преврати знания в карьеру! "Don't Be a Monkey" – это современная онлайн-платформа для изучения программирования и IT-технологий.
                    Мы поможем тебе стать востребованным специалистом в мире технологий, даже если ты начинаешь с нуля.
                </p>
                
                <p>
                    Мы предлагаем качественное обучение с практическими заданиями, доступ к экспертам, актуальные материалы, и поддерживаем тебя на пути к карьере в IT.
                </p>
                
            </div>
        </aside>
    );
};

export default Sidebar;
