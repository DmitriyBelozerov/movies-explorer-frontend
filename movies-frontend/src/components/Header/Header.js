import './Header.css';
import logo from '../../images/headerLogo.svg';
import Navigation from '../Navigation/Navigation';


function Header(props) {
    const headerClass = `header ${props.movies && 'header_type_movies'}`;

    return (
        <header className={headerClass}>
            <div className="header__logo">
                <img className="header__image" alt="логотип" src={logo} />
            </div>
            <Navigation main={props.main} movies={props.movies} signIn="Войти"
                signUp="Регистрация" account="Аккаунт" myFilms="Сохраненные фильмы"
                films="Фильмы">
            </Navigation>
        </header>
    )
}

export default Header; 