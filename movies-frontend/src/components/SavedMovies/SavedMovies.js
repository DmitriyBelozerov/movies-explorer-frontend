import React from 'react';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesSpan from '../MoviesSpan/MoviesSpan';

function SavedMovies(props) {
    return (
        <div className="savedMovies">
            <Header movies="true"></Header>

            <main>
                <SearchForm onSubmit={props.handleSubmit} handleChangeCheckBox={props.handleCheckBox} 
                    type='myMovies' />
                <MoviesSpan isOpen={props.isOpenMoviesSpan} message={props.messageError} />
                <MoviesCardList movies={props.selectedMovies.length ? props.selectedMovies : props.myMovies} selectedMovies={props.selectedMovies}
                    handleDelete={props.handleDelete} >
                </MoviesCardList>
            </main>

            <Footer></Footer>
        </div>
    );
}

export default SavedMovies;