import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filterCheckbox">
      <p className="filterCheckbox__description">Короткометражки</p>
      <label className='checkbox'>
        <input type='checkbox' className='checkbox__input' />
        <div className='checkbox__div'>  </div>
      </label>
    </div>
  );
}

export default FilterCheckbox;