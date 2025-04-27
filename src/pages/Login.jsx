import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from "../contexts/AuthContext"; // добавили
import logo from '../images/header.png';
import InputField from "../components/InputField";
import "../styles/Login.css";

const schema = yup.object({
  username: yup.string().required("Имя пользователя обязательно"),
  password: yup.string().required("Пароль обязателен").min(6, "Пароль должен содержать минимум 6 символов")
}).required();

const Login = () => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const { login } = useAuth(); // получаем функцию login из контекста

  const onSubmit = (data) => {
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (registeredUser &&
        registeredUser.username === data.username &&
        registeredUser.password === data.password) {
      login(registeredUser);
      navigate("/");
    } else {
      alert("Неверное имя пользователя или пароль");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <img src={logo} alt="DBA Monkey" className="login-logo" />
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <InputField
            label="Имя пользователя:"
            name="username"
            control={control}
            placeholder="Введите имя"
            rules={{ required: true }}
            errorMessage={errors.username?.message}
          />

          <InputField
            label="Пароль:"
            name="password"
            type="password"
            control={control}
            placeholder="Введите пароль"
            rules={{ required: true }}
            errorMessage={errors.password?.message}
          />

          <button type="submit" className="login-button">
            Войти
          </button>

          <div className="login-footer">
            <span>Еще не зарегистрированы?</span>
            <Link to="/register">Зарегистрироваться</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
