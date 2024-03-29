import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {

  function handleChange() {
    props.handleChangeCheckBox(props.type)
  }

  return (
    <div className="filterCheckbox">
      <p className="filterCheckbox__description">Короткометражки</p>
      <label className='checkbox'>
        <input type='checkbox' className='checkbox__input' name='shortFilm' value={''} onChange={handleChange} checked={props.valueCheckBox || false} />
        <div className='checkbox__div'>  </div>
      </label>
    </div>
  );
}

export default FilterCheckbox;