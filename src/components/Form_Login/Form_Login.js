import React, { useState } from "react";

import "./form_login.css";
export default function Form_Login() {
  const [valuesForm, setValuesForm] = useState({
    email: "",
    code: "",
  });
  const [message, setMessage] = useState("");

  // console.log(valuesForm);
  const handleGetValueForm = (event) => {
    const { name, value } = event.target;
    setValuesForm({ ...valuesForm, [name]: value });
  };
  const handleLogin = () => {
    window.location.href = '/'
  }
  return (
    <div className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4 w-96 h-max-content">
      <form action className="form">
        <div className="form__div">
          <input
            onChange={handleGetValueForm}
            type="text"
            className="form__input"
            placeholder=" "
            name="email"
          />
          <label htmlFor className="form__label">
            Tài khoản gmail của bạn
          </label>
        </div>
        <div className="form__div">
          {/* <input type="password" className="form__input" placeholder=" " /> */}
          <input
            onChange={handleGetValueForm}
            type=""
            name="code"
            className="form__input"
            placeholder=" "
          />
          <label htmlFor className="form__label ">
            Mật khẩu
          </label>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={handleLogin}
            className="bg-blue-theme  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Đăng nhập
          </button>
        </div>{" "}
      </form>

    </div>
  );
}
