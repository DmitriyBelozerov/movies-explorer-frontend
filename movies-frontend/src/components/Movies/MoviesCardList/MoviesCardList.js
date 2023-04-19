import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="moviesCardList">
        <ul className="moviesCardList__list">
            <MoviesCard></MoviesCard>
            <MoviesCard></MoviesCard>
            <MoviesCard></MoviesCard>
            <MoviesCard></MoviesCard>
            <MoviesCard></MoviesCard>

        </ul>
    </section>
  );
}

export default MoviesCardList;