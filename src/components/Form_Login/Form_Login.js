import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAccessToken, setUserInfor } from "../../redux/reducer/userReducer";
import { postAPI } from "../../services/axiosCofig";
import localStorageServ from "../../services/localstorageServ";

import "./form_login.css";
export default function Form_Login() {
  const dispatch = useDispatch();

  const [valuesForm, setValuesForm] = useState({
    account: "transfasfquangsiaadaadev@gmail.com",
    password: "asfdasdfsafd",
  });
  const [message, setMessage] = useState("");

  // console.log(valuesForm);
  const handleGetValueForm = (event) => {
    const { name, value } = event.target;
    setValuesForm({ ...valuesForm, [name]: value });
  };
  const handleLogin = async () => {
    const res = await postAPI("login", valuesForm);
    console.log(res);
    localStorageServ.accessToken.set(res.data.access_token);
    localStorageServ.userInfor.set(res.data.user);
    window.location = "/";
    // dispatch(setUserInfor(res.data.user));
    // dispatch(setAccessToken(res.data.acces_token));
  };
  return (
    <div className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4 w-96 h-max-content">
      <form action className="form">
        <div className="form__div">
          <input
            onChange={handleGetValueForm}
            type="text"
            className="form__input"
            placeholder=" "
            name="account"
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
            name="password"
            className="form__input"
            placeholder=" "
          />
          <label htmlFor className="form__label ">
            Mật khẩu
          </label>
        </div>
        <span className="text-blue-theme underline mb-3 inline-block">
          Quên mật khẩu ?
        </span>
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
