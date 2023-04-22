import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies() {
    return (
        <div className="savedMovies">
            <Header movies="true"></Header>
            <SearchForm></SearchForm>
            <MoviesCardList></MoviesCardList>
            <Footer></Footer>
        </div>
    );
}

export default SavedMovies;