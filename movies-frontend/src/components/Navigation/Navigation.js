import './Navigation.css';

function Navigation(props) {
const classNavigatorEnter =(`navigation__enter ${!props.main && 'navigation__enter_display_none'}`)
const classNavigatorRegistration =(`navigation__registration ${!props.main && 'navigation__registration_display_none'}`)

const classNavigatorFilms =(`navigation__films ${!props.movies && 'navigation__films_display_none'}`)
const classNavigatorMyFilms =(`navigation__myFilms ${!props.movies && 'navigation__myFilms_display_none'}`)
const classNavigatorAccount =(`navigation__account ${!props.movies && 'navigation__account_display_none'}`)

    return (
        <section className="navigation">
            <button className={classNavigatorRegistration}>{props.signUp}</button>
            <button className={classNavigatorEnter}>{props.signIn}</button>

            <button className={classNavigatorFilms}>{props.films}</button>
            <button className={classNavigatorMyFilms}>{props.myFilms}</button>
            <button className={classNavigatorAccount}>{props.account}</button>

        </section>
    )
}

export default Navigation;