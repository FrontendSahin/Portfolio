import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Header.css';

function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const offcanvasRef = useRef(null);

  // Menü açıldığında body'ye no-scroll sınıfı ekle
  useEffect(() => {
    const offcanvasElement = offcanvasRef.current;
    if (offcanvasElement) {
      offcanvasElement.addEventListener('shown.bs.offcanvas', () => {
        document.body.classList.add('no-scroll');
      });
      offcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
        document.body.classList.remove('no-scroll');
      });
    }
  }, []);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="Main">
      <Link to="/">
        <img
          src="../../Image/e7f3947c-c2c9-4b1b-9e2f-ef3da612ed99.webp"
          alt="Logo"
          className="logo"
        />
      </Link>

      <button
        className="btn btn-primary d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Menü
      </button>

      {/* Offcanvas Menü */}
      <div
        className="offcanvas offcanvas-end"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        ref={offcanvasRef}
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Menü</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Link to="/">Anasayfa</Link>
          <Link to="/Sebzeler">Sebzeler</Link>
          <Link to="/Meyveler">Meyveler</Link>
          <Link to="">Kampanyalar</Link>
          <Link to="">Giriş Yap</Link>
          <Link to="">Kayıt Ol</Link>
          <Link to="/Sepet">Sepetim</Link>

          <form onSubmit={handleSubmit}>
            <div className="Search">
              <input
                type="search"
                value={searchQuery}
                onChange={handleChange}
                placeholder="Ürün ara..."
              />
              <button type="submit" className="btn btn-dark">Ara</button>
            </div>
          </form>
        </div>
      </div>

      {/* Menü Öğeleri (1200px ve üzeri ekranlar için) */}
      <div className="LeftHeader">
        <Link to="/">Anasayfa</Link>
        <Link to="/Sebzeler">Sebzeler</Link>
        <Link to="/Meyveler">Meyveler</Link>
      </div>

      {/* SearchContainer sadece 1200px ve üzeri ekranlarda görünecek */}
      <div className="SearchContainer">
        <form onSubmit={handleSubmit}>
          <div className="Search">
            <input
              type="search"
              value={searchQuery}
              onChange={handleChange}
              placeholder="Ürün ara..."
            />
            <button type="submit" className="btn btn-dark">Ara</button>
          </div>
        </form>
      </div>

      {/* Sağ Kısımdaki Bağlantılar (1200px ve üzeri ekranlar için) */}
      <div className="RightHeader">
        <Link to="">Giriş Yap</Link>
        <Link to="">Kayıt Ol</Link>
        <Link to="/Sepet">
          <Link className="fas fa-shopping-cart" to="/Sepet">Sepetim</Link>
        </Link>
      </div>
    </div>
  );
}

export default Header;
