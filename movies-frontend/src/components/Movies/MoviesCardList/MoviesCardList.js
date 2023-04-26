import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <section className="moviesCardList">
        <ul className="moviesCardList__list">
            <MoviesCard movie={props.movie}></MoviesCard>
            <MoviesCard movie={props.movie}></MoviesCard>
            <MoviesCard movie={props.movie}></MoviesCard>
            <MoviesCard movie={props.movie}></MoviesCard>
            <MoviesCard movie={props.movie}></MoviesCard>

        </ul>
    </section>
  );
}

export default MoviesCardList;