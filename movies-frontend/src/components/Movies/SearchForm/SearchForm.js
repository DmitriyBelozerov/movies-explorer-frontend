import React from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props) {
    const [valueSearch, setInputSearch] = React.useState('');


    function handleChangeInput(e) {
        setInputSearch(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(valueSearch);
    }


    return (
        <div className="searchForm">
            <form className="searchForm__form" onSubmit={handleSubmit}>
                <input className="searchForm__input" placeholder='Фильм'
                    value={valueSearch || ''} onChange={handleChangeInput} />
                <button className="searchForm__buttonSubmit" type="submit"></button>
            </form>
            <FilterCheckbox></FilterCheckbox>
        </div>
    );
}

export default SearchForm;