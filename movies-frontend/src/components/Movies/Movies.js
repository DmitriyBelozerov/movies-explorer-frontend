import Header from '../Header/Header';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import MoreMoves from './MoreMoves/MoreMoves';
import Footer from '../Footer/Footer';

function Movies({ movies, handleSubmit }) {


  return (
    <div className="movies">
      <Header movies="true"></Header>

      <main>
        <SearchForm onSubmit={handleSubmit}></SearchForm>
        <Preloader></Preloader>
        <MoviesCardList movie='true' movies={movies}></MoviesCardList>
        <MoreMoves></MoreMoves>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default Movies;