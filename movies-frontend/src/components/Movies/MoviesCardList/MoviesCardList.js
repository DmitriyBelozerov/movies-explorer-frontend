import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <section className={`moviesCardList ${props.movies.length < 1 ? 'moviesCardList_hiden' : ''}`}>
      <ul className="moviesCardList__list">
        {props.movies.map(item => (
          <MoviesCard key={`props.movie ? ${item.id} : ${item._id}`} movieType={props.movie} title={item.nameRU} image={item.image.url}
            duration={item.duration} data={item} onMovieSave={props.handleSave} onMovieDelete={props.handleDelete} myMovies={props.myMovies}>
          </MoviesCard>

        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;