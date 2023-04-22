import './Navigation.css';
import {Link} from 'react-router-dom';

function Navigation(props) {
const classNavigatorEnter =(`navigation__enter ${!props.main && 'navigation__enter_display_none'}`)
const classNavigatorRegistration =(`navigation__registration ${!props.main && 'navigation__registration_display_none'}`)

const classNavigatorFilms =(`navigation__films ${!props.movies && 'navigation__films_display_none'}`)
const classNavigatorMyFilms =(`navigation__myFilms ${!props.movies && 'navigation__myFilms_display_none'}`)
const classNavigatorAccount =(`navigation__account ${!props.movies && 'navigation__account_display_none'}`)

    return (
        <section className="navigation">
            <Link to="/signup" className={classNavigatorRegistration}>{props.signUp}</Link>
            <Link to="/signin" className={classNavigatorEnter}>{props.signIn}</Link>

            <Link to="/movies" className={classNavigatorFilms}>{props.films}</Link>
            <Link to="/saved-movies" className={classNavigatorMyFilms}>{props.myFilms}</Link>
            <Link to="/profile" className={classNavigatorAccount}>{props.account}</Link>

        </section>
    )
}

export default Navigation;