import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';


function PageNotFound() {
    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }

    return (
        <section className='pageNotFound '>
            <h2 className='pageNotFound__title'>404</h2>
            <span className='pageNotFound__description'>Страница не найдена</span>
            <button onClick={goBack}  className='pageNotFound__link'>Назад</button>
        </section>
    )
}

export default PageNotFound;