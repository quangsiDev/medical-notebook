import axios from "axios";
import React, { useState } from "react";
import { postAPI } from "../../services/axiosCofig";
import {
  Input,
  Button,
  Col,
  Row,
  Select,
  InputNumber,
  DatePicker,
  AutoComplete,
  Cascader,
  Tooltip,
} from "antd";
import { CopyOutlined } from "@ant-design/icons";
import "./form_login.css";

const { Option } = Select;
export default function Form_Register() {
  const [valuesForm, setValuesForm] = useState({
    account: "",
    password: "",
    name: "",
  });
  const [message, setMessage] = useState("");

  // console.log(valuesForm);
  const handleGetValueForm = (event) => {
    const { name, value } = event.target;
    setValuesForm({ ...valuesForm, [name]: value });
  };
  const handleRegister = async () => {
    // httpServ
    //   .register(valuesForm)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // console.log("yess");
    console.log(valuesForm);
    const res = await postAPI("register", valuesForm);
    console.log(res);
    // axios({
    //   url: "http://localhost:5000/api/register",
    //   method: "POST",
    //   data: valuesForm,
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
            name="name"
          />
          <label htmlFor className="form__label">
            Tên của bạn
          </label>
        </div>
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
        <Input.Group className="w-full my-3">
          <div className="flex $">
            <Select defaultValue="Con vật yêu thích">
              <Option value="Zhejiang">Con vật yêu thích</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>{" "}
            <Input
              style={{ width: "50%" }}
              // defaultValue="Xihu District, Hangzhou"
            />
          </div>
        </Input.Group>
        <div className="flex items-center justify-between">
          <button
            onClick={handleRegister}
            className="bg-blue-theme  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Đăng kí
          </button>
        </div>{" "}
        <div></div>
      </form>
    </div>
  );
}
