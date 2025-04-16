import React from 'react';
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
                    <li><button>Главная</button></li>
                    <li><button>Курсы</button></li>
                    <li><button>Трудоустройство</button></li>
                    <li><button>Контакты</button></li>
                    <li><button>Авторизация</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
