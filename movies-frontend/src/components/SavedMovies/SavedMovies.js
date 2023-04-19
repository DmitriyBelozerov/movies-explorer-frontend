import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Header from '../Header/Header';

function SavedMovies() {
    return (
        <div className="savedMovies">
            <Header movies="true"></Header>
            <SearchForm></SearchForm>
            <MoviesCardList></MoviesCardList>
        </div>
    );
}

export default SavedMovies;