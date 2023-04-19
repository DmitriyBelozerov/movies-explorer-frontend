import './PortfolioUrl.css'

function PortfolioUrl(props) {
    
    const portfolioClassName = (`portfolioUrl ${props.end && 'portfolioUrl_type_end'}`);

    return (
        <div className={portfolioClassName}>
            <h3 className="portfolioUrl__title">{props.name}</h3>
            <p className="portfolioUrl__img ">↗</p>
        </div>
    );
}

export default PortfolioUrl;