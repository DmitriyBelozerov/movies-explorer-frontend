import './AboutProject.css';

function AboutProject() {
    return (
        <section className="aboutProject">
            <h2 className="aboutProject__title">О проекте</h2>
            <div className="aboutProject__section">
                <div className="aboutProject__column">
                    <h3 className="aboutProject__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="aboutProject__about">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="aboutProject__column">
                    <h3 className="aboutProject__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="aboutProject__about"> У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="chart">
                <h4 className="chart__title chart__title_active_true">1 неделя</h4>
                <h4 className="chart__title">4 недели</h4>
                <p className="chart__subtitle">Back-end</p>
                <p className="chart__subtitle">Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;