import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-100 text-base-content">
            <div>
                <span className="footer-title">Servicios</span>
                <a href="/servicios" className="link link-hover">Consultas</a>
                <a href="/servicios" className="link link-hover">Tratamientos</a>
                <a href="/servicios" className="link link-hover">Seguimiento</a>
            </div>
            <div>
                <span className="footer-title">Dr. Gabriel López</span>
                <a href="/acercade" className="link link-hover">Acerca de</a>
                <a href="/contacto" className="link link-hover">Contacto</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Política de Privacidad</a>
                <a className="link link-hover">Términos de Servicio</a>
            </div>
        </footer>
    );
}

export default Footer;
