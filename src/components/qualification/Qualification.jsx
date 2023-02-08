import React, { useState } from "react";
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualificações</h2>
            <span className="section__subtitle">Minha jornada profissional</span>

            <div className="qualification__container container">
                <div className="qualification__select">Selecione a categoria</div>
                <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Educação
                    </div>
                    
                    <div className={toggleState === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experiência
                    </div>                    
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Developer React</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Atual
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Banco de Dados SQL</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2022
                                </div>
                            </div>
                        </div>   

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Javascript e Typescript</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX/UI Expert</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Engenheiro de Produção</h3>
                                <span className="qualification__subtitle">Faculdade Pitágoras</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2013 - 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                     
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">Freelancer</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Atual
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Inteligência Corporativa</h3>
                                <span className="qualification__subtitle">Dislab</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Atual
                                </div>
                            </div>
                        </div>   

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Gerente de Marketing</h3>
                                <span className="qualification__subtitle">JC Farmacêutica</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2014 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Marketing Expert</h3>
                                <span className="qualification__subtitle">Utildrogas</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2013 - 2014
                                </div>
                            </div>
                        </div>                        
                     
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;