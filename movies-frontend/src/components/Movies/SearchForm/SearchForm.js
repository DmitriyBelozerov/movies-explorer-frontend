import React from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props) {
    const [valueSearch, setInputSearch] = React.useState('');
    const [span, setSpan] = React.useState(false);



    function handleChangeInput(e) {
        setInputSearch(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(valueSearch);
        !valueSearch ? setSpan(true) : setSpan(false);
    }


    return (
        <div className="searchForm">
            <form className="searchForm__form" onSubmit={handleSubmit}>
                <input className="searchForm__input" placeholder='Фильм'
                    value={valueSearch || ''} onChange={handleChangeInput} />
                <button className="searchForm__buttonSubmit" type="submit"></button>
            </form>
            <FilterCheckbox></FilterCheckbox>
            <span className={`searchForm__error-message ${span && 'searchForm__error-message_visible'}`}>
                Нужно ввести ключевое слово
            </span>
        </div>
    );
}

export default SearchForm;