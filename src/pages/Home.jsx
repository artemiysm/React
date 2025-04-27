import React from "react";
import logo from '../images/monkey.png'
import mark1 from '../images/mark.png'
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <img
          src={logo}
          alt="Обезьяна с книгой"
          className="hero-image"
        />
        <div className="hero-text">
          <h2>
            Найди себя и профессию <br /> в <span className="highlight">DBA Monkey</span>
          </h2>
        </div>
      </section>

      <section className="intro">
        <h3>Освой программирование и IT с нуля до профессионала</h3>
        <p>
          Преврати знания в карьеру! "Don't Be a Monkey" — это современная
          онлайн-платформа для изучения программирования и IT-технологий. Мы
          поможем тебе стать востребованным специалистом в мире технологий, даже
          если ты начинаешь с нуля.
        </p>
      </section>

      <section className="why-choose-us">
        <h3>Почему выбирают нас?</h3>
        <ul>
          <li><img src={mark1} alt="Mark" className="checkmark" /> Интерактивное обучение — практикуй код прямо в браузере, выполняя реальные проекты.</li>
          <li><img src={mark1} alt="Mark" className="checkmark" /> Персонализированные курсы — выбирай путь обучения, который подходит именно тебе.</li>
          <li><img src={mark1} alt="Mark" className="checkmark" /> Карьерный рост — помощь с трудоустройством, вакансии от партнеров.</li>
          <li><img src={mark1} alt="Mark" className="checkmark" /> Живые комьюнити — обсуждения, совместные проекты, менторы.</li>
          <li><img src={mark1} alt="Mark" className="checkmark" /> Гибкие подписки — месяц, год или полный доступ ко всем курсам.</li>
          <li><img src={mark1} alt="Mark" className="checkmark" /> Геймификация — бейджи, рейтинги, челленджи для мотивации.</li>
        </ul>
      </section>

      <section className="technologies">
        <h3>Учись тому, что востребовано</h3>
        <p>
          Мы обучаем самым актуальным технологиям:
          <br />
          Веб-разработка (HTML, CSS, JavaScript, React, Node.js)
          <br />
          Мобильная разработка (Flutter, Kotlin, Swift)
          <br />
          Data Science и AI (Python, машинное обучение, анализ данных)
          <br />
          Кибербезопасность (сетевые технологии, защита информации)
          <br />
          DevOps и автоматизация (Docker, Kubernetes, CI/CD)
        </p>
      </section>
    </div>
  );
};

export default Home;
