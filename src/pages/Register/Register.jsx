import React from 'react';
import "./style.scss"
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Register = () => {
    return (
        <div className={"register__wrap"}>
            <RegisterForm/>
        </div>
    );
};

export default Register;