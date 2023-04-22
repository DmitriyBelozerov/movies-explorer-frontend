import './Register.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register() {
    return (
        
            <PopupWithForm
            title="Добро пожаловать!"
            button="Зарегестрироваться"
            link="/signin"
            question="Уже зарегистрированы?"
            linkName="Войти"
            >
                <div className='form__input-block'>
                    <h3 className='form__input-title'>Имя</h3>
                    <input type='email' className='form__input'></input>
                </div>

            </PopupWithForm>
    );
}

export default Register;