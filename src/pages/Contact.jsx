// src/pages/Contacts.jsx

import React from "react";
import "../styles/Contacts.css";

const Contacts = () => {
  return (
    <div className="contacts-page">
      <h2>Связаться с нами</h2>
      <p>Мы всегда на связи и готовы помочь тебе на пути к успеху!</p>

      <div className="contact-info">
        <p><strong>Email:</strong> support@dontbeamonkey.com</p>
        <p><strong>Телефон:</strong> +7 (999) 123-45-67</p>
        <p><strong>Адрес:</strong> г. Москва, ул. Программистов, д. 42</p>
      </div>

      <div className="contact-map">
        {/* Можно вставить карту, пока просто заглушка */}
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aпример&source=constructor"
          title="Карта"
          width="100%"
          height="300"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
