import './Login.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login(props) {
    return (
        <PopupWithForm
        title="Рады видеть!"
        button="Войти"
        link="/signup"
        question="Еще не зарегестрированы?"
        linkName="Регистрация"
        onSubmit={props.onSubmit}
        >
        </PopupWithForm>
    );
}

export default Login;