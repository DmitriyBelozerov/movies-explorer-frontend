import './Header.css';
import logo from '../../images/headerLogo.svg';
import Navigation from '../Navigation/Navigation';


function Header(props) {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__image" alt="логотип" src={logo} />
            </div>
            <Navigation signUp='Регистрация' signIn='Войти'></Navigation>
        </header>
    )
}

export default Header;