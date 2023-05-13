import './Portfolio.css';
import PortfolioUrl from './PortfolioUrl/PortfolioUrl';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">
                Портфолио
            </h2>
            <PortfolioUrl link='https://github.com/DmitriyBelozerov/how-to-learn' name="Статичный сайт"></PortfolioUrl>
            <PortfolioUrl link='https://github.com/DmitriyBelozerov/russian-travel' name="Адаптивный сайт"></PortfolioUrl>
            <PortfolioUrl link='https://github.com/DmitriyBelozerov/react-mesto-api-full-gha' name="Одностраничное приложение" end="true"></PortfolioUrl>

        </section>
    );
}

export default Portfolio;