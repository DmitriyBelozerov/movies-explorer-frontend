import './MoviesCard.css';
import example from '../../../images/example.jpg'

function MoviesCard() {
    return (
        <li className="moviesCard">
            <img alt='название' className="moviesCard__photo" src={example}  />
            <h2 className="moviesCard__title">Бег это свобода</h2>
            <article className="moviesCard__time">1ч 17м</article>
            <button className="moviesCard__check" type="button" aria-label="check" ></button>
            <button className="moviesCard__delete" type="button" aria-label="delete" ></button>
        </li>
    );
}

export default MoviesCard;