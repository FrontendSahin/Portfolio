import React from 'react';
import '../Css/Footer.css'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section about">
            <h3>Hakkımızda</h3>
            <p>
              Taze ve organik sebze-meyve ürünlerimizi doğrudan çiftlikten
              sofranıza getiriyoruz. Kalite ve müşteri memnuniyeti önceliğimizdir.
            </p>
          </div>

          <div className="footer-section links">
            <h3>Hızlı Erişim</h3>
            <Link to="/">Anasayfa</Link>
            <Link to="/Ürünler">Ürünler</Link>
            <Link to="">İletişim</Link>
            <Link to="">Sıkça Sorulan Sorular</Link>
          </div>

          <div className="footer-section contact">
            <h3>İletişim</h3>
            <p><i className="fa fa-phone"></i> +90 555 123 4567</p>
            <p><i className="fa fa-envelope"></i> destek@sebzemeyve.com</p>
            <p><i className="fa fa-map-marker"></i> İstanbul, Türkiye</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Sebze Meyve. Tüm Hakları Saklıdır.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
