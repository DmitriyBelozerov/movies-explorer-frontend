import './MoviesCard.css';
import example from '../../../images/example.jpg';


function MoviesCard(props) {
    const moviesCardDeleteButton = props.movie ? "moviesCard__delete_display_none" : "moviesCard__delete"
    const moviesCardAddSavedButton = props.movie ? "moviesCard__add-to-saved" : "moviesCard__add-to-saved_display_none";
    const moviesCardCheck = props.movie ? "moviesCard__check" : "moviesCard__add-to-saved_display_none";


    return (
        <li className="moviesCard">
            <img alt='название' className="moviesCard__photo" src={example} />
            <h2 className="moviesCard__title">Бег это свобода</h2>
            <article className="moviesCard__time">1ч 17м</article>
            <button className={moviesCardAddSavedButton} type="button" aria-label="saved" >Сохранить</button>
            <div className={moviesCardCheck}></div>

            <button className={moviesCardDeleteButton} type="button" aria-label="delete" ></button>
        </li>
    );
}

export default MoviesCard;