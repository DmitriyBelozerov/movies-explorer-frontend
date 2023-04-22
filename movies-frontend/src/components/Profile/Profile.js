import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <>
            <Header movies="true"></Header>

            <div className="profile">

                <form className="profile__form">

                    <h2 className="profile__title">Привет, Дмитрий!</h2>

                    <div className="profile__block-input">
                        <h3 className="profile__title-input">Имя</h3>
                        <input id="name" className="profile__input" type="text" 
                            name="inputName" placeholder="Дмитрий" minLength="2" maxLength="40" required />
                    </div>

                    <div className="profile__block-input  profile__block-input_type_end">
                        <h3 className="profile__title-input">E-mail</h3>
                        <input id="email" className="profile__input" type="email" 
                            name="inputEmail" placeholder="E-mail" minLength="2" maxLength="40" required />
                    </div>

                    <button className="profile__button-save" type="submit">
                        Редактировать
                    </button>

                </form>

                <Link to='/' className="profile__button-go-out" type="submit">
                    Выйти из аккаунта
                </Link>

            </div>

        </>
    );
}

export default Profile;