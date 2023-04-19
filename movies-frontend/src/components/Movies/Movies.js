import Header from '../Header/Header';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import MoreMoves from './MoreMoves/MoreMoves';

function Movies() {
  return (
    <div className="movies">
        <Header movies="true"></Header>
        <SearchForm></SearchForm>
        <Preloader></Preloader>
        <MoviesCardList></MoviesCardList>
        <MoreMoves></MoreMoves>
    </div>
  );
}

export default Movies;