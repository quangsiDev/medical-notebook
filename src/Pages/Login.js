import Lottie from 'lottie-react'
import React from 'react'
import login_bg from '../assets/login.json'
import Form_Login from '../components/Form_Login/Form_Login'
export default function Login() {
    return (
        <div className="flex items-center justify-center h-screen ">
            <Lottie

                loop={false}
                animationData={login_bg}
                style={{ width: 600, height: 600 }}
            />
            <Form_Login />
        </div>
    )
}
