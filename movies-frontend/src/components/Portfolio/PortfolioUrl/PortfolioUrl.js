import './PortfolioUrl.css'


function PortfolioUrl(props) {
    
    const portfolioClassName = (`portfolioUrl ${props.end && 'portfolioUrl_type_end'}`);

    return (
        <a href={props.link} className={portfolioClassName} target="_blank" rel="noreferrer">
            <h3 className="portfolioUrl__title">{props.name}</h3>
            <p className="portfolioUrl__img ">↗</p>
        </a>
    );
}

export default PortfolioUrl;