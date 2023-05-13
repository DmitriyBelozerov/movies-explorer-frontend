import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PopupWithForm.css';
import { EMPTY_MESSAGE, ERROR_EMAIL_MESSAGE, ERROR_NAME_MESSAGE } from '../../constants/constants';

function PopupWithForm(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [nameError, setNameError] = useState(EMPTY_MESSAGE);
    const [emailError, setEmailError] = useState(EMPTY_MESSAGE);
    const [passwordError, setPasswordError] = useState(EMPTY_MESSAGE);
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (props.link === "/signup") {
            if (emailError || passwordError) {
                setFormValid(false);
            } else {
                setFormValid(true)
            }
        } else {
            if (emailError || passwordError || nameError) {
                setFormValid(false);
            } else {
                setFormValid(true)
            }
        }
    }, [nameError, emailError, passwordError])

    function handleChangeEmail(e) {
        setEmail(e.target.value);
        const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        if (!reg.test(String(e.target.value).toLowerCase())) {
            setEmailError(ERROR_EMAIL_MESSAGE)
        } else {
            setEmailError('')
        }
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
        if (!e.target.value) {
            setPasswordError(EMPTY_MESSAGE)
        } else {
            setPasswordError('')
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

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(email, password, name);
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break;
            case 'password':
                setPasswordDirty(true)
                break;
            case 'name':
                setNameDirty(true)
                break;
            default:
                break;
        }
    }

    return (
        <section className="popupWithForm">
            <div className="popupWithForm__block">
                <Link to='/' className='popupWithForm__logo' />
                <h2 className="popupWithForm__title">{props.title}</h2>
                <form className='form popupWithForm__form' onSubmit={handleSubmit} noValidate >

                    <div className={`form__input-block ${props.link === "/signup" && 'form__input-block_type_hiden'} `}>
                        <h3 className='form__input-title'>Имя</h3>
                        <input type='text' className='form__input' minLength='2' maxLength='40' name='name' value={name || ''}
                            onChange={handleChangeName} onBlur={e => blurHandler(e)} required></input>
                        {(nameDirty && nameError) && <span className='form__error-message'>{nameError}</span>}

                    </div>

                    <div className='form__input-block'>
                        <h3 className='form__input-title'>E-mail</h3>
                        <input type='email' className='form__input' name='email' value={email || ''}
                            onChange={handleChangeEmail} onBlur={e => blurHandler(e)} required />
                        {(emailDirty && emailError) && <span className='form__error-message'>{emailError}</span>}

                    </div>

                    <div className='form__input-block'>
                        <h3 className='form__input-title'>Пароль</h3>
                        <input type='password' className='form__input' name='password' value={password || ''}
                            onChange={handleChangePassword} onBlur={e => blurHandler(e)} required />
                        {(passwordDirty && passwordError) && <span className='form__error-message'>{passwordError}</span>}
                    </div>

                    <span className='form__error-message'>{props.errMessage}</span>
                    <button className={`form__button ${!formValid && "form__button_type_disabled"}`} type="submit" disabled={!formValid} >
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