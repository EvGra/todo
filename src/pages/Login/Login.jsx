import React from "react";
import "../Login/login.scss";

export const Login = () => {
  return (
    <div className="login">
      <form action="" className="form">
        <h2 className="form__title">Регистрация</h2>

        <input
          className="form__field"
          type="text"
          placeholder="Введите логин"
        />
        <input
          className="form__field"
          type="email"
          placeholder="Введите Email"
        />
        <input
          className="form__field"
          type="password"
          placeholder="Введите пароль"
        />
        <input
          className="form__field"
          type="password"
          placeholder="Введите пароль еще раз"
        />

        <button className="form__btn" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};
