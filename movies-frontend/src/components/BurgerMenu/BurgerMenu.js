import './BurgerMenu.css';
import { Link } from 'react-router-dom';

function BurgerMenu(props) {

  

    return (
        <section className={`navigator-menu ${props.isOpen && 'navigator-menu_open_true'}`} >
            <button className='navigator-menu__button-close' onClick={props.isClose}></button>
            <Link className='navigator-menu_link' to="/" >Главная</Link>

            <Link  className='navigator-menu_link' to="/movies" >Фильмы</Link>
            <Link  className='navigator-menu_link' to="/saved-movies" >Сохраненные фильмы</Link>
            <Link  className='navigator-menu_link navigator-menu_link_type_account' to="/profile" >Аккаунт</Link>

        </section>
    )
}

export default BurgerMenu;