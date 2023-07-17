import './MoviesSpan.css';


function MoviesSpan(props) {
    return (
        <span className={`movies-span__message ${props.isOpen && 'movies-span__message_view_true'}`}>{props.message || 'Ничего не найдено'} </span>
    );
}

export default MoviesSpan;