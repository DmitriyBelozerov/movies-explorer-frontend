import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { TranslationLogIn } from '../../contexts/Context';

function Navigation(props) {
    const loggedIn = React.useContext(TranslationLogIn);

    const classNavigatorEnter = (`navigation__enter ${loggedIn && 'navigation__enter_display_none'}`)
    const classNavigatorRegistration = (`navigation__registration ${loggedIn && 'navigation__registration_display_none'}`)

    const classNavigatorFilms = (`navigation__films ${!loggedIn && 'navigation__films_display_none'}`)
    const classNavigatorMyFilms = (`navigation__myFilms ${!loggedIn && 'navigation__myFilms_display_none'}`)
    const classNavigatorAccount = (`navigation__account ${!loggedIn && 'navigation__account_display_none'}`)
    const classNavigatorBurgerButton = `${loggedIn && 'navigation__burger-button'} ${!loggedIn && 'navigation__burger-button_display_none'}`


    const [burgerMenu, setBurgerMenu] = React.useState(false);

    function handleClick(e) {
        e.preventDefault();
        setBurgerMenu(true)
    }

    function closePopup(e) {
        e.preventDefault();
        setBurgerMenu(false)
    }

    return (
        <section className="navigation">
            <Link to="/signup" className={classNavigatorRegistration}>{props.signUp}</Link>
            <Link to="/signin" className={classNavigatorEnter}>{props.signIn}</Link>

            <Link to="/movies" className={classNavigatorFilms}>{props.films}</Link>
            <Link to="/saved-movies" className={classNavigatorMyFilms}>{props.myFilms}</Link>
            <Link to="/profile" className={classNavigatorAccount}>{props.account}</Link>
            <button className={classNavigatorBurgerButton} onClick={handleClick}></button>
            <BurgerMenu isOpen={burgerMenu} isClose={closePopup}></BurgerMenu>
        </section>
    )
}

export default Navigation;