import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="logo">Digital Store</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="footer-info-sections">
          <div className="info-section">
            <h4>Informação</h4>
            <ul>
              <li>Sobre Drip Store</li>
              <li>Segurança</li>
              <li>Wishlist</li>
              <li>Blog</li>
              <li>Trabalhe conosco</li>
              <li>Meus Pedidos</li>
            </ul>
          </div>
          <div className="info-section">
            <h4>Categorias</h4>
            <ul>
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Bonés</li>
              <li>Headphones</li>
              <li>Tênis</li>
            </ul>
          </div>
          <div className="info-section">
            <h4>Contato</h4>
            <ul>
              <li>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161
              </li>
              <li>(85) 3051-3411</li>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">© 2024 Digital Store</p>
    </footer>
  );
};

export default Footer;
