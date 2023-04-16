import './TechsCard.css';

function TechsCard(props) {
    return (
        <div className="techsCard">
            <p className="techsCard_title">{props.title}</p>
        </div>
    );
}

export default TechsCard;