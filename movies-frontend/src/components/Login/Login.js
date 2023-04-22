import './Login.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login() {
    return (
        <PopupWithForm
        title="Рады видеть!"
        button="Войти"
        link="/signup"
        question="Еще не зарегестрированы?"
        linkName="Регистрация"
        >
        </PopupWithForm>
    );
}

export default Login;