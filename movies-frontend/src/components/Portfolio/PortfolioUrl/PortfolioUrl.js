import { Link } from 'react-router-dom';
import './PortfolioUrl.css'


function PortfolioUrl(props) {
    
    const portfolioClassName = (`portfolioUrl ${props.end && 'portfolioUrl_type_end'}`);

    return (
        <Link to={props.link} className={portfolioClassName}>
            <h3 className="portfolioUrl__title">{props.name}</h3>
            <p className="portfolioUrl__img ">↗</p>
        </Link>
    );
}

export default PortfolioUrl;