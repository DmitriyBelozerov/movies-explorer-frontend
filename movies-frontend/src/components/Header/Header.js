import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import { TranslationLogIn } from '../../contexts/Context';


function Header(props) {
    const loggedIn = React.useContext(TranslationLogIn);

    const headerClass = `header ${loggedIn && 'header_type_movies'}`;

    return (
        <header className={headerClass}>
            <Link to='/' className="header__logo" />
            <Navigation signIn="Войти" signUp="Регистрация"
                account="Аккаунт" myFilms="Сохраненные фильмы"
                films="Фильмы">
            </Navigation>
        </header>
    )
}

export default Header; 