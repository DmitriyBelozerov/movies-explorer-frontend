import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
  const [value, setValue] = React.useState(getValueCheckBox());

  function getValueCheckBox() {
    return localStorage.getItem('valueCheckBox') === 'true' ? true : false
  }
  
  function handleChange() {
    props.handleChangeCheckBox(!value)
    setValue(!value)
    localStorage.setItem('valueCheckBox', !value);
  }


  return (
    <div className="filterCheckbox">
      <p className="filterCheckbox__description">Короткометражки</p>
      <label className='checkbox'>
        <input type='checkbox' className='checkbox__input' name='shortFilm' value={''} onChange={handleChange} checked={value} />
        <div className='checkbox__div'>  </div>
      </label>
    </div>
  );
}

export default FilterCheckbox;