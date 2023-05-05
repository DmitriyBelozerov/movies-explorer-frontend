import React from 'react';
import Header from '../Header/Header';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import MoreMoves from './MoreMoves/MoreMoves';
import Footer from '../Footer/Footer';
import MoviesSpan from '../MoviesSpan/MoviesSpan';

function Movies({ movies, myMovies, handleSubmit, handleSave, handleCheckBox, isOpenPreloader, isOpenMoviesSpan, messageError, valueCheckBox }) {
  const [moviesView, setMoviesView] = React.useState(getMoviesView());
  const [hidenButtonMoreMovies, setHidenButtonMoreMovies] = React.useState(false);
  const [quantityMovies, setQuantityMovies] = React.useState(null);

  function getMoviesView() {
    return JSON.parse(localStorage.getItem('moviesView'));
  }

  React.useEffect(() => {
    setMoviesView(movies.filter((item, index) => { return index < quantityMovies }));
  }, [movies, quantityMovies])

  React.useEffect(() => {
    if (moviesView.length === 0 || quantityMovies >= movies.length) {
      setHidenButtonMoreMovies(false)
    } else {
      setHidenButtonMoreMovies(true)
    }
  }, [moviesView, quantityMovies, movies])

  React.useEffect(() => {
    if (document.documentElement.clientWidth >= 1280) {
      setQuantityMovies(12)
    } else if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1280) {
      setQuantityMovies(8)
    } else {
      setQuantityMovies(5)
    }
  }, [movies])

  function handleButtonMoreMovies() {
    if (document.documentElement.clientWidth >= 1280) {
      setQuantityMovies(quantityMovies + 3)
    } else {
      setQuantityMovies(quantityMovies + 2)
    }
  }

  return (
    <div className="movies">
      <Header/>

      <main className="movies__main">
        <SearchForm onSubmit={handleSubmit} handleChangeCheckBox={handleCheckBox} valueCheckBox={valueCheckBox}></SearchForm>
        <Preloader isOpen={isOpenPreloader}></Preloader>
        <MoviesSpan isOpen={isOpenMoviesSpan} message={messageError}/>
        <MoviesCardList movie='true' movies={moviesView} myMovies={myMovies}  handleSave={handleSave} ></MoviesCardList>
        <MoreMoves handleClick={handleButtonMoreMovies} visible={hidenButtonMoreMovies}></MoreMoves>
      </main>

      <Footer/>
    </div>
  );
}

export default Movies;