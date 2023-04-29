import React from 'react';
import { Link } from 'react-router-dom';

import './PopupWithForm.css';

function PopupWithForm(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(email, password);
    }

    return (
        <section className="popupWithForm">
            <div className="popupWithForm__block">
                <Link to='/' className='popupWithForm__logo' />
                <h2 className="popupWithForm__title">{props.title}</h2>
                <form className='form popupWithForm__form' onSubmit={handleSubmit}>
                    {props.children}
                    <div className='form__input-block'>
                        <h3 className='form__input-title'>E-mail</h3>
                        <input type='email' className='form__input' name='email' value={email || ''} onChange={handleChangeEmail} required />
                    </div>
                    <div className='form__input-block'>
                        <h3 className='form__input-title'>Пароль</h3>
                        <input type='password' className='form__input' name='password' value={password || ''} onChange={handleChangePassword} required/>
                    </div>
                    <button className={`form__button ${props.button === "Войти" && "form__button_type_signin"}`} type="submit">
                        {props.button}
                    </button>
                </form>
                <p className='popupWithForm__question'>{props.question}
                    <Link to={props.link} className='popupWithForm__link' >{props.linkName}</Link>
                </p>
            </div>
        </section>
    );
}

export default PopupWithForm;