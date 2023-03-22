import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i className="bx bx-award about__icon"></i>

                <h3 className="about__title">Experiência</h3>
                <span className="about__subtitle">+3 Anos<br />Web Developer</span>
            </div>

            <div className="about__box">
            <i className="bx bx-trending-up about__icon"></i>

                <h3 className="about__title">Experiência BI</h3>
                <span className="about__subtitle">+6 Anos<br />Business Inteligence</span>
            </div>

            <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>

                <h3 className="about__title">Trabalhos</h3>
                <span className="about__subtitle">+10 Projetos Concluídos</span>
            </div>
        </div>
    )
}

export default Info