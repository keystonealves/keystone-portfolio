import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';

const Contact = () => {
    const form = useRef();
    const {name, email, project} = form;

    const sendEmail = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const project = e.target.project.value;

        if(name !== "" && email !== "" && project !== "") {
            emailjs.sendForm('service_4z2paa7', 'template_fuofg1g', form.current, 'ecJv688rdDD7r3DD8');
            toast.success("Mensagem enviada, em breve retornarei o contato.");
            e.target.reset();
        } else {
            toast.error("Preencha todos os campos (Nome, Email e Projeto)");
        }

    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Entre em contato</h2>
            <span className="section__subtitle">Fale comigo</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Fale diretamente</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">keystonealves@gmail.com</span>

                            <a href="mailto:keystonealves@gmail.com;keystoneksa@outlook.com" className="contact__button">Enviar email <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">(62) 98565-1373</span>

                            <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5562985651373&text=Olá Keystone, gostaria de falar sobre meu projeto!" className="contact__button">Chamar no Whats <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bx-phone contact__card-icon"></i>

                            <h3 className="contact__card-title">Ligação</h3>
                            <span className="contact__card-data">(62) 98565-1373</span>

                            <a href="tel:+5562985651373" className="contact__button">Ligar <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Me conte sobre seu projeto</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Nome</label>
                            <input type="text" className="contact__form-input" name="name" placeholder="Digite seu nome..." />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" className="contact__form-input" name="email" placeholder="Digite seu email..." />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Projeto</label>
                            <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="Escreva sobre seu projeto..."></textarea>
                        </div>

                <button className="button button--flex">
                    Enviar Mensagem
                    <svg
                    className="button__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    >
                    <path
                        d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                        fill="var(--container-color)"
                    ></path>
                    <path
                        d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                        fill="var(--container-color)"
                    ></path>
                    </svg>
                </button>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;