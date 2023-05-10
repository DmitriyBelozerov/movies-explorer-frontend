import React from 'react';
import Header from '../Header/Header';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import MoreMoves from './MoreMoves/MoreMoves';
import Footer from '../Footer/Footer';
import MoviesSpan from '../MoviesSpan/MoviesSpan';
import {
  RESOLUTION_LARGE, RESOLUTION_AVERAGE, RESOLUTION_LARGE_MOVIES, RESOLUTION_AVERAGE_MOVIES,
  RESOLUTION_SMALL_MOVIES, RESOLUTION_LARGE_ADD_MOVIES, RESOLUTION_SMALL_ADD_MOVIES
} from '../../constants/constants';

function Movies({ movies, myMovies, handleSubmit, handleSave, handleCheckBox, isOpenPreloader, isOpenMoviesSpan, messageError, valueCheckBox }) {
  const [moviesView, setMoviesView] = React.useState([]);
  const [hidenButtonMoreMovies, setHidenButtonMoreMovies] = React.useState(false);
  const [quantityMovies, setQuantityMovies] = React.useState(0);

  function getMoviesView() {
    return JSON.parse(localStorage.getItem('moviesView'));
  }

  console.log();

  React.useEffect(() => {
    movies &&
      setMoviesView(movies.filter((item, index) => { return index < quantityMovies }));
  }, [movies, quantityMovies])

  React.useEffect(() => {
    if (getMoviesView() === null) {
      return
    }
    setMoviesView(getMoviesView());
  }, [])


  React.useEffect(() => {
    if (moviesView.length === 0 || quantityMovies >= movies.length) {
      setHidenButtonMoreMovies(false)
    } else {
      setHidenButtonMoreMovies(true)
    }
  }, [moviesView, quantityMovies, movies])

  React.useEffect(() => {
    if (document.documentElement.clientWidth >= RESOLUTION_LARGE) {
      setQuantityMovies(RESOLUTION_LARGE_MOVIES)
    } else if (document.documentElement.clientWidth >= RESOLUTION_AVERAGE && document.documentElement.clientWidth < RESOLUTION_LARGE) {
      setQuantityMovies(RESOLUTION_AVERAGE_MOVIES)
    } else {
      setQuantityMovies(RESOLUTION_SMALL_MOVIES)
    }
  }, [movies])

  function handleButtonMoreMovies() {
    if (document.documentElement.clientWidth >= RESOLUTION_LARGE) {
      setQuantityMovies(quantityMovies + RESOLUTION_LARGE_ADD_MOVIES)
    } else {
      setQuantityMovies(quantityMovies + RESOLUTION_SMALL_ADD_MOVIES)
    }
  }

  return (
    <div className="movies">
      <Header />

      <main className="movies__main">
        <SearchForm onSubmit={handleSubmit} handleChangeCheckBox={handleCheckBox} valueCheckBox={valueCheckBox}></SearchForm>
        <Preloader isOpen={isOpenPreloader}></Preloader>
        <MoviesSpan isOpen={isOpenMoviesSpan} message={messageError} />
        <MoviesCardList movie='true' movies={moviesView} myMovies={myMovies} handleSave={handleSave} ></MoviesCardList>
        <MoreMoves handleClick={handleButtonMoreMovies} visible={hidenButtonMoreMovies}></MoreMoves>
      </main>

      <Footer />
    </div>
  );
}

export default Movies;