import React from 'react';
import { Link } from 'react-router-dom';  // Импортируем Link для роутинга
import './Header.css';
import logo from '../img/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Логотип" className="logo" />
                <h1>Заголовок сайта</h1>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li>
                        <Link to="/" className="nav-link">Главная</Link>
                    </li>
                    <li>
                        <Link to="/course" className="nav-link">Курсы</Link> {/* Переход на страницу курсов */}
                    </li>
                    <li>
                        <Link to="/employment" className="nav-link">Трудоустройство</Link>
                    </li>
                    <li>
                        <Link to="/contacts" className="nav-link">Контакты</Link>
                    </li>
                    <li>
                        <Link to="/sign" className="auth-btn">Авторизация</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
