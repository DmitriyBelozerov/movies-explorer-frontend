import React from 'react';
import './Register.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register(props) {
    const [name, setName] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    return (
        <PopupWithForm
            title="Добро пожаловать!"
            button="Зарегестрироваться"
            link="/signin"
            question="Уже зарегистрированы?"
            linkName="Войти"
            onSubmit={props.onSubmit}
            name={name}
            errMessage={props.errMessage}
        >
            <div className='form__input-block'>
                <h3 className='form__input-title'>Имя</h3>
                <input type='text' className='form__input' minLength='2' maxLength='40'
                    name='name' value={name || ''} onChange={handleChangeName} required></input>
            </div>
        </PopupWithForm>
    );
}

export default Register;