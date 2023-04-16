import './Promo.css';
import banner from '../../images/banner.svg'

function Promo() {
  return (
    <section className="promo">
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <img className='promo__img' alt='баннер' src={banner}/>
    </section>
  );
}

export default Promo;