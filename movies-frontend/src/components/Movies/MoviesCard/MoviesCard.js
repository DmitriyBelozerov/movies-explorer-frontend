import './MoviesCard.css';

function MoviesCard(props) {
    const baseUrl = 'https://api.nomoreparties.co/';
    const imageUrl = `${baseUrl}${props.image}`;
    const moviesCardDeleteButton = props.movieType ? "moviesCard__delete_display_none" : "moviesCard__delete"
    const moviesCardAddSavedButton = props.movieType ? "moviesCard__add-to-saved" : "moviesCard__add-to-saved_display_none";
    const moviesCardCheck = props.movieType ? "moviesCard__check" : "moviesCard__add-to-saved_display_none";

    return (
        <li className="moviesCard">
            <img alt='название' className="moviesCard__photo" src={imageUrl} />
            <h2 className="moviesCard__title">{props.title}</h2>
            <article className="moviesCard__time">1ч 17м</article>
            <button className={moviesCardAddSavedButton} type="button" aria-label="saved" >Сохранить</button>
            <div className={moviesCardCheck}></div>

            <button className={moviesCardDeleteButton} type="button" aria-label="delete" ></button>
        </li>
    );
}

export default MoviesCard;