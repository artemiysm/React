import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import "../styles/Register.css";

const schema = yup.object({
  username: yup.string().required("Имя пользователя обязательно"),
  password: yup.string().required("Пароль обязателен").min(6, "Пароль должен содержать минимум 6 символов"),
}).required();

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Сохраняем данные пользователя в localStorage
    localStorage.setItem("registeredUser", JSON.stringify(data));
    setMessage("Регистрация прошла успешно!");

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Регистрация</h2>
        {message && <div className="success-message">{message}</div>}
        <form onSubmit={handleSubmit(onSubmit)} className="register-form">
          <label>Имя пользователя:</label>
          <input
            type="text"
            {...register("username")}
            placeholder="Введите имя"
          />
          {errors.username && <p>{errors.username.message}</p>}

          <label>Пароль:</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Введите пароль"
          />
          {errors.password && <p>{errors.password.message}</p>}

          <button type="submit" className="register-button">
            Зарегистрироваться
          </button>
        </form>
        <div className="register-footer">
          <span>Уже есть аккаунт?</span> <Link to="/login">Войти</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
