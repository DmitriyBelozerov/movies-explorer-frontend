import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
    const [duration, setDuration] = React.useState('');
    const baseUrl = 'https://api.nomoreparties.co/';
    const imageUrl = props.movieType ? `${baseUrl}${props.image}` : `${props.data.image}`;

    const moviesCardDeleteButton = props.movieType ? "moviesCard__delete_display_none" : "moviesCard__delete"
    const moviesCardAddSavedButton = props.movieType &&
        !props.myMovies.some(i => { return i.movieId === props.data.id }) ?
        "moviesCard__add-to-saved" :
        "moviesCard__add-to-saved_display_none";
    const moviesCardCheck = props.movieType &&
        props.myMovies.some(i => { return i.movieId === props.data.id }) ?
        "moviesCard__check" :
        "moviesCard__add-to-saved_display_none";

    React.useEffect(() => {
        Math.floor(props.duration / 60) === 0 ?
            setDuration(`${props.duration % 60}м`) :
            setDuration(`${Math.floor(props.duration / 60)}ч ${props.duration % 60}м`)
    }, [props])

    function handleSave() {
        props.onMovieSave(props.data);
    }

    function handleDeleteClick() {
        props.onMovieDelete(props.data);
    }

    return (
        <li className="moviesCard">
            <a className="moviesCard__link-to-treiler" href={props.data.trailerLink} target='blanc'>
                <img alt={props.title} className="moviesCard__photo" src={imageUrl} />
            </a>
            <h2 className="moviesCard__title">{props.title}</h2>
            <article className="moviesCard__time">{duration}</article>
            <button className={moviesCardAddSavedButton} type="button" aria-label="saved" onClick={handleSave}>Сохранить</button>
            <div className={moviesCardCheck} onClick={handleDeleteClick} ></div>

            <button className={moviesCardDeleteButton} type="button" aria-label="delete" onClick={handleDeleteClick}></button>
        </li>
    );
}

export default MoviesCard;