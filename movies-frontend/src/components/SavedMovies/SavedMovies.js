import React from 'react';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies(props) {

    return (
        <div className="savedMovies">
            <Header movies="true"></Header>
          
            <main>
                <SearchForm></SearchForm>
                <MoviesCardList movies={props.myMovies} handleDelete={props.handleDelete}></MoviesCardList>
            </main>

            <Footer></Footer>
        </div>
    );
}

export default SavedMovies;