import './Techs.css';
import TechsCard from './TechsCard/TechsCard';

function Techs() {
    return (
        <section className="techs">
            <h2 className="techs__title">Технологии</h2>
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__about"> На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="techs__cards">
                <TechsCard title="HTML"></TechsCard>
                <TechsCard title="CSS"></TechsCard>

                <TechsCard title="JS"></TechsCard>
                <TechsCard title="React"></TechsCard>
                <TechsCard title="Git"></TechsCard>
                <TechsCard title="Express.js"></TechsCard>
                <TechsCard title="mongoDB"></TechsCard>
            </div>


        </section>
    );
}

export default Techs;