import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <section className="moviesCardList">
        <ul className="moviesCardList__list">
          {props.movies.map(item => (
            <MoviesCard key={item.id} movieType={props.movie} title={item.nameRU} image={item.image.url}  ></MoviesCard>

          ))}
        </ul>
    </section>
  );
}

export default MoviesCardList;