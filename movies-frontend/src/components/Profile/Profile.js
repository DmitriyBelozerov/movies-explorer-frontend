import React, { useState, useEffect } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { TranslationCurrentUser } from '../../contexts/Context';
import { EMPTY_MESSAGE, ERROR_NAME_MESSAGE, ERROR_EMAIL_MESSAGE } from '../../constants/constants';

function Profile(props) {
    const currentUser = React.useContext(TranslationCurrentUser);
    const [email, setEmail] = React.useState(currentUser.email);
    const [name, setName] = React.useState(currentUser.name);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || nameError) {
            setFormValid(false);
        } else {
            setFormValid(true)
        }
    }, [nameError, emailError, name, email])



    function handleChangeEmail(e) {
        setEmail(e.target.value);
        const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        if (!reg.test(String(e.target.value).toLowerCase())) {
            setEmailError(ERROR_EMAIL_MESSAGE)
        } else {
            setEmailError('')
        }
    }

    function handleChangeName(e) {
        setName(e.target.value);
        if (e.target.value.length < 2 || e.target.value.length > 40) {
            setNameError(ERROR_NAME_MESSAGE)
            if (!e.target.value) {
                setNameError(EMPTY_MESSAGE)
            }
        } else {
            setNameError('')
        }
    }

    function handleGoOut() {
        props.onGoOut();
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(email, name);
    }

    const validForm = formValid && !(name === currentUser.name && email === currentUser.email);

    return (
        <>
            <Header />
            <div className="profile">
                <form className="profile__form" onSubmit={handleSubmit} noValidate>
                    <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
                    <div className="profile__block-input">
                        <h3 className="profile__title-input">Имя</h3>
                        <input id="name" className="profile__input" type="text" name="inputName"
                            placeholder={`${currentUser.name}`} minLength="2" maxLength="40"
                            value={name || ``} onChange={handleChangeName} required />
                    </div>
                    {(nameError) && <span className='form__error-message'>{nameError}</span>}

                    <div className="profile__block-input  profile__block-input_type_end">
                        <h3 className="profile__title-input">E-mail</h3>
                        <input id="email" className="profile__input" type="email" name="inputEmail"
                            placeholder="E-mail" minLength="2" maxLength="40" value={email || ``}
                            onChange={handleChangeEmail} required />
                    </div>
                    {(emailError) && <span className='form__error-message'>{emailError}</span>}

                    <span className="profile__message">{props.message}</span>

                    <button className={`profile__button-save ${!validForm && 'profile__button-save_visible_none'}`}
                        type="submit" disabled={!validForm}>
                        Редактировать
                    </button>
                </form>

                <Link to='/' className="profile__button-go-out" type="submit" onClick={handleGoOut}>
                    Выйти из аккаунта
                </Link>
            </div>
        </>
    );
}

export default Profile;