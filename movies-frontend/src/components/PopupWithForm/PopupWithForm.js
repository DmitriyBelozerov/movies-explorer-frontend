import './PopupWithForm.css';
import logo from '../../images/headerLogo.svg';
import { Link } from 'react-router-dom';

function PopupWithForm(props) {
    
    return (
        <section className="popupWithForm">
            <div className="popupWithForm__block">
                <image className='popupWithForm__logo' src={logo} />
                <h2 className="popupWithForm__title">{props.title}</h2>
                <form className='popupWithForm__form form'>
                    {props.children}
                    <div className='form__input-block'>
                        <h3 className='form__input-title'>E-mail</h3>
                        <input type='email' className='form__input' name='email' required></input>
                    </div>
                    <div className='form__input-block'>
                        <h3 className='form__input-title'>Пароль</h3>
                        <input type='password' className='form__input' name='password' required></input>
                    </div>
                    <button className={`form__button ${props.button==="Войти" && "form__button_type_signin"}`} type="submit">
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