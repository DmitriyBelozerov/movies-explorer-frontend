import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { TranslationCurrentUser } from '../../contexts/Context';


function Profile(props) {
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');

    const currentUser = React.useContext(TranslationCurrentUser);

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleGoOut() {
        props.onGoOut();
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(email, name);
    }


    return (
        <>
            <Header />
            <div className="profile">
                <form className="profile__form"  onSubmit={handleSubmit}>
                    <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
                    <div className="profile__block-input">
                        <h3 className="profile__title-input">Имя</h3>

                        <input id="name" className="profile__input" type="text" name="inputName"
                            placeholder={`${currentUser.name}`} minLength="2" maxLength="40"
                            value={name || ``} onChange={handleChangeName} required />
                    </div>
                    <div className="profile__block-input  profile__block-input_type_end">
                        <h3 className="profile__title-input">E-mail</h3>

                        <input id="email" className="profile__input" type="email" name="inputEmail"
                            placeholder="E-mail" minLength="2" maxLength="40"
                            value={email || ``} onChange={handleChangeEmail} required />
                    </div>
                    <button className="profile__button-save" type="submit">
                        Редактировать
                    </button>
                </form>

                <Link to='/' className="profile__button-go-out" type="submit" onClick={handleGoOut}>
                    Выйти из аккаунта
                </Link>
            </div>
        </>
    );
}

export default Profile;