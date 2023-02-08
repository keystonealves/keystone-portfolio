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
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">
                            Visual <br /> Designer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>
                        Saiba Mais
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">
                            Técnicas avançadas de "Visual Design" e "Rebranding de Marcas" são fundamentais para destacar a identidade do seu negócio e atrair novos clientes. Tenho a experiência e a criatividade para transformar sua marca e aumentar sua presença no mercado. Alguns dos nossos destaques incluem: desenvolvimento de logotipos, design de landing pages, criação de materiais de marketing e redesign de sites.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Transforme sua presença no mercado com um visual inovador.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Criação de logotipos únicos e impactantes.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Redesign de sites para aumentar a conversão e a satisfação do cliente.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Materiais de marketing criativos e impactantes para destacar sua empresa.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Landing Pages com alta taxa de conversão.
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