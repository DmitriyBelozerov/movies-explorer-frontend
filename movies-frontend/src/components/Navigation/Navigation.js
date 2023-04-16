import './Navigation.css';

function Navigation(props) {
    return (
        <section className="navigation">
            <p className='navigation__registration'>{props.signUp}</p>
            <p className='navigation__enter'>{props.signIn}</p>
        </section>
    )
}

export default Navigation;