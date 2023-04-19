import './Footer.css';

function Footer(props) {
    return (
        <footer className="footer">
            <article className="footer__acticle">Учебный проект Яндекс.Практикум х BeatFilm.</article>
            <p className="footer__year">© 2023</p>
            <div className="footer__urls">
                <a className="footer__url" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                <a className="footer__url" href="https://github.com/" target="_blank" rel="noreferrer">Github</a>
            </div>
        </footer>
    )
}

export default Footer;