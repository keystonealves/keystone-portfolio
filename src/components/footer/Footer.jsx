import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Keystone Alves</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">Home</a>
                    </li>

                    <li>
                        <a href="#about" className="footer__link">Sobre Mim</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/keystonealves" className="footer__social-link" target={"_blank"} rel="noreferrer">
                    <i className="uil uil-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/keystonealves/" className="footer__social-link" target={"_blank"} rel="noreferrer">
                        <i className="uil uil-linkedin"></i>
                    </a>
                    
                    <a href="https://github.com/keystonealves/" className="footer__social-link" target={"_blank"} rel="noreferrer">
                        <i className="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">Keystone Alves &#169; 2023 - Todos direitos reservados.</span>
            </div>
        </footer>
    )
}

export default Footer;