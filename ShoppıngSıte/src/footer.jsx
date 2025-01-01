import React from "react";
import './css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Başlık ve Açıklama */}
      <div className="footer-content">
        <h3 className="footer-title">Bizi Takip Edin</h3>
        <p className="footer-description">
          Sosyal medya hesaplarımızdan bizi takip ederek en güncel haberlerden
          haberdar olabilirsiniz.
        </p>
      </div>

      {/* Sosyal Medya İkonları */}
      <div className="footer-icons">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          title="Instagram"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          title="Facebook"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          title="YouTube"
        >
          <i className="bi bi-youtube"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          title="Twitter-X"
        >
          <i className="bi bi-twitter"></i>
        </a>
      </div>

      {/* Telif Hakkı Bilgisi */}
      <div className="footer-copyright">
        <p>&copy; 2024 Şirket Adı. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
