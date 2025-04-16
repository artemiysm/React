import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Учись тому, что востребовано</h2>
                <p>Мы обучаем самым актуальным технологиям:</p>
                <ul className="footer-list">
                    <li>Веб-разработка (HTML, CSS, JavaScript, React, Node.js)</li>
                    <li>Мобильная разработка (Flutter, Kotlin, Swift)</li>
                    <li>Data Science и AI (Python, машинное обучение, нейросети)</li>
                    <li>Кибербезопасность (этичный хакинг, защита данных)</li>
                    <li>DevOps и автоматизация (Docker, Kubernetes, CI/CD)</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
