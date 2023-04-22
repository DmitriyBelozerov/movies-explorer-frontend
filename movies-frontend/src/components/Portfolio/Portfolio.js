import './Portfolio.css'
import PortfolioUrl from './PortfolioUrl/PortfolioUrl';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">
                Портфолио
            </h2>
            <PortfolioUrl link='/movies' name="Статичный сайт"></PortfolioUrl>
            <PortfolioUrl link='/movies' name="Адаптивный сайт"></PortfolioUrl>
            <PortfolioUrl link='/movies' name="Одностраничное приложение" end="true"></PortfolioUrl>

        </section>
    );
}

export default Portfolio;