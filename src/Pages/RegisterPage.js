import Lottie from "lottie-react";
import React from "react";
import login_bg from "../assets/login.json";
import Form_Register from "../components/Form_Resgister/Form_Register";
export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <Lottie
        loop={false}
        animationData={login_bg}
        style={{ width: 600, height: 600 }}
      />
      <Form_Register />
    </div>
  );
}
