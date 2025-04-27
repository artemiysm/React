import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import logo from '../images/header.png';
import "../styles/Header.css"; // Подключаем файл стилей

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header>
      <nav>
        <img
          src={logo}
          alt="Обезьяна с книгой"
        />
        <div className="links">
          <Link to="/">Главная</Link>
          <Link to="/about">Курсы</Link>
          <Link to="/services">Трудоустройство</Link>
          <Link to="/contact">Контакты</Link>
          {user ? (
            <>
              <Link to="/profile">Профиль</Link>
              <button onClick={logout}>Выйти</button>
            </>
          ) : (
            <Link to="/login">Войти</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
