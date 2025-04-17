// src/page/Sign.jsx
import React from 'react';
import './Sign.css';

const Sign = () => {
    return (
        <div className="sign-page">
            <h2>Авторизация</h2>
            <form className="sign-form">
                <label>Email</label>
                <input type="email" placeholder="Введите email" />

                <label>Пароль</label>
                <input type="password" placeholder="Введите пароль" />

                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default Sign;
