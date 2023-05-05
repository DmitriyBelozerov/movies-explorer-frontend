import React from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props) {
    const [valueSearch, setInputSearch] = React.useState(getValueCheckBox());
    const [span, setSpan] = React.useState(false);

    function getValueCheckBox() {
        return localStorage.getItem('valueInput');
      }

    function handleChangeInput(e) {
        setInputSearch(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(valueSearch);
        !valueSearch ? setSpan(true) : setSpan(false);
        localStorage.setItem('valueInput', valueSearch);

    }


    return (
        <div className="searchForm">
            <form className="searchForm__form" onSubmit={handleSubmit}>
                <input className="searchForm__input" placeholder='Фильм'
                    value={valueSearch || ''} onChange={handleChangeInput} />
                <button className="searchForm__buttonSubmit" type="submit"></button>
            </form>
            <FilterCheckbox handleChangeCheckBox={props.handleChangeCheckBox}></FilterCheckbox>
            <span className={`searchForm__error-message ${span && 'searchForm__error-message_visible'}`}>
                Нужно ввести ключевое слово
            </span>
        </div>
    );
}

export default SearchForm;