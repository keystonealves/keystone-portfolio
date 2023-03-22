import React, { useState } from "react";
import "./services.css"

const Services = () => {

    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Serviços</h2>
            <span className="section__subtitle">Como posso te atender</span>

            <div className="services__container container grid">
            <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            Soluções <br /> Web
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        Saiba Mais
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Soluções Web</h3>
                            <p className="services__modal-description">
                            Desenvolvimento de aplicações web com máxima "Flexibilidade e Desempenho", alguns dos destaques incluem: aplicativos de e-commerce interativos, dashboards de gerenciamento de dados visualmente atraentes e diversos outros tipos de plataformas.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Desenvolvimento de interfaces interativas.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Desenvolvimentos em qualquer nível de complexibilidade.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Elementos UI/UX impactantes.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Entrego qualquer necessidade de solução web.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
            </div>
            
            <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            Ui/Ux <br /> Designer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>
                        Saiba Mais
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Ui/Ux Designer</h3>
                            <p className="services__modal-description">
                            O design de interface do usuário (UI) e experiência do usuário (UX) são elementos críticos para o sucesso de qualquer aplicação web ou móvel. Alguns dos destaques incluem: protótipos interativos, designs de aplicativos móveis, layouts de sites responsivos e soluções de design personalizadas para melhorar a funcionalidade e a satisfação do usuário.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Transformo suas ideias em realidade utilizando UI/UX.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Experiências de usuário inovadoras para aumentar a conversão.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Design elegante e fácil de usar..
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Protótipos interativos, designs de aplicativos móveis e layouts de sites responsivos de alta qualidade.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
            </div>
            
            <div className="services__content">
                    <div>
                        <i className="bx bx-trending-up services__icon"></i>
                        <h3 className="services__title">
                            Business <br /> Intelligence
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>
                        Saiba Mais
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Business Intelligence (BI)</h3>
                            <p className="services__modal-description">
                            Business Intelligence, ou BI, é um conjunto de ferramentas, processos e metodologias que ajudam as empresas a transformar dados brutos em informações valiosas e acionáveis para a tomada de decisões. Ele pode ser usado para monitorar o desempenho de uma empresa em vários níveis, desde o financeiro até o operacional, além de permitir a análise de tendências, identificação de oportunidades e ameaças, e a otimização de processos.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Elimina o trabalho manual na coleta e análise de dados, evitando erros e atrasos.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Tomada de decisões com informações assertivas e estratégicas.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Identificação de problemas e oportunidades rapidamente.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Melhoria da eficiência operacional e otimização de processos.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Redução de erros e aprimoramento da qualidade dos dados.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
            </div>
            
            </div>

        </section>
    )
}

export default Services;