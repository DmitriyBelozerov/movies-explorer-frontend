import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';


function Header(props) {
    const headerClass = `header ${props.movies && 'header_type_movies'}`;

    return (
        <header className={headerClass}>
            <Link  to='/' className="header__logo" />
            <Navigation main={props.main} movies={props.movies} signIn="Войти"
                signUp="Регистрация" account="Аккаунт" myFilms="Сохраненные фильмы"
                films="Фильмы">
            </Navigation>
        </header>
    )
}

export default Header; 