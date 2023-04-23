import './AboutMe.css';
import myPhoto from '../../../images/myPhoto.jpg'

function AboutMe() {
    return (
        <section className="aboutMe">
            <h2 className="aboutMe__title">Студент</h2>
            <article className="aboutMe__article">
                <img className="aboutMe__photo" alt="фото разработчика" src={myPhoto} />

                <div className="aboutMe__description">
                    <h3 className="aboutMe__name">Дмитрий</h3>
                    <h4 className="aboutMe__profession">Фронтенд-разработчик, 35 лет</h4>
                    <p className="aboutMe__about">Я родился в Казахстане, живу сейчас в городе Луга (Ленинградской области), закончил факультет экономики КГУ.
                        У меня есть жена и два кота) Я люблю интересные проекты, а ещё увлекаюсь бурением скважин. Начал кодить в конце 2021 года,
                        а уже в начале 2022 года записался на курсы "Яндекс Практикум".
                        Почти всегда работал в продажах, но детская мечта работать в IT.
                    </p>
                </div>

                <a className="aboutMe__gitnub" href="https://github.com/DmitriyBelozerov" target="_blank" rel="noreferrer">Github</a>

            </article>
        </section>
    );
}

export default AboutMe;
