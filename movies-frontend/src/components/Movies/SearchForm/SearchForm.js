import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
    return (
        <div className="searchForm">
            <form className="searchForm__form">
                <input className="searchForm__input"></input>
                <button className="searchForm__buttonSubmit" type="submit"></button>
            </form>
            <FilterCheckbox></FilterCheckbox>
        </div>
    );
}

export default SearchForm;