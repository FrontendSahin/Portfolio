import React, { useState, useEffect } from 'react';
import './css/header.css';

const Header = () => {
    const [texts, setTexts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [visibleCards, setVisibleCards] = useState([]);

    useEffect(() => {
        // Kart metinlerini alıyoruz
        const initialTexts = Array.from(document.querySelectorAll('.card-text')).map(element => element.textContent);
        setTexts(initialTexts);
        setVisibleCards(Array.from(document.querySelectorAll('.card'))); // Tüm kartları başlangıçta görünür yapıyoruz
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();

        // Arama sorgusunu küçük harfe çeviriyoruz
        const filteredCards = texts.map((text, index) => ({
            text,
            index
        })).filter(item => item.text.toLowerCase().includes(searchQuery.toLowerCase()));

        // Eşleşen kartların index'lerini alıyoruz
        const visibleIndexes = filteredCards.map(item => item.index);

        // Tüm kartları gizli hale getirip, eşleşen kartları görünür yapıyoruz
        const allCards = document.querySelectorAll('.card');
        allCards.forEach((card, index) => {
            if (visibleIndexes.includes(index)) {
                card.style.display = 'flex'; // Görünür
            } else {
                card.style.display = 'none'; // Gizli
            }
        });
    };

    return (
        <nav className="navbar bg-body-tertiary custom-navbar">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <a href='http://localhost:5173/' className="navbar-brand">ModaManya</a>
                <div className="d-flex justify-content-center flex-grow-1">
                    <form className="d-flex" role="search" style={{ maxWidth: '400px', width: '100%' }} onSubmit={handleSearch}>
                        <input
                            id="InputText"
                            className="form-control me-2"
                            type="search"
                            placeholder="Aradığınız Ürünü Yazın."
                            aria-label="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="btn btn-dark" type="submit">Search</button>
                    </form>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <h4 style={{ color: "black", fontWeight: "bolder", textDecoration: "underline" }}>İşlemler</h4>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Giriş Yap</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Kayıt Ol</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Favoriler</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sepet</a>
                            </li>
                            <hr className='line' />
                            <h4 style={{ color: "black", fontWeight: "bolder", textDecoration: "underline" }}>Kategoriler</h4>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Kadın</a>
                                <ul>
                                    <li className="nav-item"><a className="nav-link" href="#">Giyim</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Ayakkabı</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Çanta</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Aksesuar</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">İç Giyim</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Büyük Beden</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Lüks</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Spor & Outdoor</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Kozmetik</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Erkek</a>
                                <ul>
                                    <li className="nav-item"><a className="nav-link" href="#">Giyim</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Ayakkabı</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Çanta</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Aksesuar</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">İç Giyim</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Büyük Beden</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Lüks</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Spor & Outdoor</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Çocuk</a>
                                <ul>
                                    <li className="nav-item"><a className="nav-link" href="#">Kız Çocuk</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Erkek Çocuk</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Bebek</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Oyuncak</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Okul & Eğitim</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Elektronik</a>
                                <ul>
                                    <li className="nav-item"><a className="nav-link" href="#">Cep Telefonu</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Bilgisayar</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Televizyon</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Fotoğraf & Kamera</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Beyaz Eşya</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Küçük Ev Aletleri</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Elektrikli Bisiklet</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Elektronik Aksesuar</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ev & Yaşam</a>
                                <ul>
                                    <li className="nav-item"><a className="nav-link" href="#">Mobilya</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Dekorasyon</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Mutfak</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Banyo</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Aydınlatma</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Ev Tekstili</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Ev Elektroniği</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Bahçe & Balkon</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Süpermarket</a>
                                <ul>
                                    <li className="nav-item"><a className="nav-link" href="#">Gıda</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">İçecek</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Temizlik</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Evcil Hayvan</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
