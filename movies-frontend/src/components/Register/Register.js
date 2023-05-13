import React from 'react';
import './Register.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register(props) {
    return (
        <PopupWithForm
            title="Добро пожаловать!"
            button="Зарегестрироваться"
            link="/signin"
            question="Уже зарегистрированы?"
            linkName="Войти"
            onSubmit={props.onSubmit}
            errMessage={props.errMessage}
        >
        </PopupWithForm>
    );
}

export default Register;