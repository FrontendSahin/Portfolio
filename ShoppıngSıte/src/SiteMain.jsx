import React, { useEffect, useState } from 'react';
import './css/main.css'
function SiteMain() {

    const getCardTexts = () => {
        const texts = Array.from(document.querySelectorAll('.card-text')).map((element) => element.textContent);
        return texts;
    };

    const Card = () => {

    }

    return (
        <>
            <div className="Main">
                <div className='MainTop'>
                    <span><a href="">En Çok Beğenilenler</a></span>
                    <span><a href="">En Çok Satanlar</a></span>
                    <span><a href="">En Çok Favorilenenler</a></span>
                    <button className='FilterBtn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasFilter" aria-controls="offcanvasFilter">Filtrele</button>
                </div>
                <hr className="border border-light border-1 opacity-50"></hr>
                <div className="MainCards">
                    <a href="">
                        <div className="card">
                            <div className='cardImage ımage-1'>
                            </div>
                            <div className="card-body">
                                <p className="card-text">FTZ WOMEN Kadın Oversize 3 Ip Şardonlu Sweatshirt Fuşya 10001</p>
                                <h5 className="card-title">488 TL</h5>
                                <a href="#" className="btn btn-light">Sepete Ekle</a>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="card">
                            <div className='cardImage ımage-2'>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Batı Styling Ice Bisiklet Yaka Oversize Sweatshirt</p>
                                <h5 className="card-title">301,13 TL</h5>
                                <a href="#" className="btn btn-light">Sepete Ekle</a>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="card">
                            <div className='cardImage ımage-3'>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Stilkombin Bill Içi Kürklü Kapşonlu Mont & Kaban_50191</p>
                                <h5 className="card-title">1,236 TL</h5>
                                <a href="#" className="btn btn-light">Sepete Ekle</a>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="card">
                            <div className='cardImage ımage-4'>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Millionaire Kadın Kırmızı Christmas Yılbaşı Yeni Yıl Baskılı 0 Sıfır Yaka Oversize Salaş Bol Kesim Sweatshirt</p>
                                <h5 className="card-title">289,90 TL</h5>
                                <a href="#" className="btn btn-light">Sepete Ekle</a>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="card">
                            <div className='cardImage ımage-5'>
                            </div>
                            <div className="card-body">
                                <p className="card-text">DYSON Airstrait™ Saç Düzleştirici (Prusya Mavisi/Parlak Bakır)</p>
                                <h5 className="card-title">19.999 TL</h5>
                                <a href="#" className="btn btn-light">Sepete Ekle</a>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="card">
                            <div className='cardImage ımage-6'>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Madmext Vizon Bisiklet Yaka Oversize Triko Kazak MG1972</p>
                                <h5 className="card-title">765,99 TL</h5>
                                <a href="#" className="btn btn-light">Sepete Ekle</a>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="card">
                            <div className='cardImage ımage-7'>
                            </div>
                            <div className="card-body">
                                <p className="card-text">çerme Vintage Erkek Oversize Siyah Deri Ceket</p>
                                <h5 className="card-title">699,90 TL</h5>
                                <a href="#" className="btn btn-light">Sepete Ekle</a>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="card">
                            <div className='cardImage ımage-8'>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Manuka PREMIUM KAŞE TRENÇ KABAN ANTRASİT</p>
                                <h5 className="card-title">4.939,86 TL</h5>
                                <a href="#" className="btn btn-light">Sepete Ekle</a>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="card">
                            <div className='cardImage ımage-9'>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Moderk Oversize Vintage Erkek Siyah Deri Ceket</p>
                                <h5 className="card-title">1.099 TL</h5>
                                <a href="#" className="btn btn-light">Sepete Ekle</a>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="card">
                            <div className='cardImage ımage-10'>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Mooi Butik Antrasit Pileli Mini Etek Balıkçı Kazak Alt Üst Triko Takım</p>
                                <h5 className="card-title">469 TL</h5>
                                <a href="#" className="btn btn-light">Sepete Ekle</a>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="card">
                            <div className='cardImage ımage-11'>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Black Sokak Beyaz My Tical Baskılı Kapüşonlu Oversize Sweatshirt Unisex</p>
                                <h5 className="card-title">294,99 TL</h5>
                                <a href="#" className="btn btn-light">Sepete Ekle</a>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="card">
                            <div className='cardImage ımage-12'>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Manuka JACQUELİNE KISA KAŞE KABAN BEJ</p>
                                <h5 className="card-title">2.559,86 TL</h5>
                                <a href="#" className="btn btn-light">Sepete Ekle</a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasFilter" aria-labelledby="offcanvasFilterLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasFilterLabel">Filtreler</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form>
                        {/* Fiyat Aralığı Dropdown */}
                        <div className="mb-3 dropdown">
                            <button className="btn btn-secondary dropdown-toggle w-100" type="button" id="priceFilterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Fiyat Aralığı
                            </button>
                            <ul className="dropdown-menu w-100" aria-labelledby="priceFilterDropdown">
                                <li><label className="dropdown-item" htmlFor="minPrice">Min Fiyat: <input type="text" id="minPrice" className="form-control d-inline w-50" placeholder="0" /></label></li>
                                <li><label className="dropdown-item" htmlFor="maxPrice">Max Fiyat: <input type="text" id="maxPrice" className="form-control d-inline w-50" placeholder="10000" /></label></li>
                            </ul>
                        </div>

                        {/* Renkler Dropdown */}
                        <div className="mb-3 dropdown">
                            <button className="btn btn-secondary dropdown-toggle w-100" type="button" id="colorFilterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Renkler
                            </button>
                            <ul className="dropdown-menu w-100" aria-labelledby="colorFilterDropdown">
                                <li className="color-option"><input type="checkbox" id="colorRed" /> <label htmlFor="colorRed" className="color-circle red"></label> Kırmızı</li>
                                <li className="color-option"><input type="checkbox" id="colorBlue" /> <label htmlFor="colorBlue" className="color-circle blue"></label> Mavi</li>
                                <li className="color-option"><input type="checkbox" id="colorGreen" /> <label htmlFor="colorGreen" className="color-circle green"></label> Yeşil</li>
                                <li className="color-option"><input type="checkbox" id="colorYellow" /> <label htmlFor="colorYellow" className="color-circle yellow"></label> Sarı</li>
                                <li className="color-option"><input type="checkbox" id="colorBlack" /> <label htmlFor="colorBlack" className="color-circle black"></label> Siyah</li>
                            </ul>
                        </div>

                        {/* Beden Dropdown */}
                        <div className="mb-3 dropdown">
                            <button className="btn btn-secondary dropdown-toggle w-100" type="button" id="sizeFilterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Beden
                            </button>
                            <ul className="dropdown-menu w-100" aria-labelledby="sizeFilterDropdown">
                                <li><input className='CheckBox' type="checkbox" id="sizeXS" /> <label htmlFor="sizeXS">XS</label></li>
                                <li><input className='CheckBox' type="checkbox" id="sizeS" /> <label htmlFor="sizeS">S</label></li>
                                <li><input className='CheckBox' type="checkbox" id="sizeM" /> <label htmlFor="sizeM">M</label></li>
                                <li><input className='CheckBox' type="checkbox" id="sizeL" /> <label htmlFor="sizeL">L</label></li>
                                <li><input className='CheckBox' type="checkbox" id="sizeXL" /> <label htmlFor="sizeXL">XL</label></li>
                            </ul>
                        </div>

                        {/* Yaka Tipi Dropdown */}
                        <div className="mb-3 dropdown">
                            <button className="btn btn-secondary dropdown-toggle w-100" type="button" id="collarFilterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Yaka Tipi
                            </button>
                            <ul className="dropdown-menu w-100" aria-labelledby="collarFilterDropdown">
                                <li><input className='CheckBox' type="checkbox" id="roundNeck" /> <label htmlFor="roundNeck">Yuvarlak Yaka</label></li>
                                <li><input className='CheckBox' type="checkbox" id="vNeck" /> <label htmlFor="vNeck">V Yaka</label></li>
                                <li><input className='CheckBox' type="checkbox" id="collarNeck" /> <label htmlFor="collarNeck">Dik Yaka</label></li>
                            </ul>
                        </div>

                        {/* Kol Tipi Dropdown */}
                        <div className="mb-3 dropdown">
                            <button className="btn btn-secondary dropdown-toggle w-100" type="button" id="sleeveFilterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Kol Tipi
                            </button>
                            <ul className="dropdown-menu w-100" aria-labelledby="sleeveFilterDropdown">
                                <li><input className='CheckBox' type="checkbox" id="longSleeve" /> <label htmlFor="longSleeve">Uzun Kol</label></li>
                                <li><input className='CheckBox' type="checkbox" id="shortSleeve" /> <label htmlFor="shortSleeve">Kısa Kol</label></li>
                                <li><input className='CheckBox' type="checkbox" id="halfSleeve" /> <label htmlFor="halfSleeve">Yarım Kol</label></li>
                            </ul>
                        </div>

                        {/* Kumaş Dropdown */}
                        <div className="mb-3 dropdown">
                            <button className="btn btn-secondary dropdown-toggle w-100" type="button" id="fabricFilterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Kumaş
                            </button>
                            <ul className="dropdown-menu w-100" aria-labelledby="fabricFilterDropdown">
                                <li><input className='CheckBox' type="checkbox" id="cottonFabric" /> <label htmlFor="cottonFabric">Pamuk</label></li>
                                <li><input className='CheckBox' type="checkbox" id="silkFabric" /> <label htmlFor="silkFabric">İpek</label></li>
                                <li><input className='CheckBox' type="checkbox" id="polyesterFabric" /> <label htmlFor="polyesterFabric">Polyester</label></li>
                                <li><input className='CheckBox' type="checkbox" id="linenFabric" /> <label htmlFor="linenFabric">Keten</label></li>
                            </ul>
                        </div>

                        {/* Desen Dropdown */}
                        <div className="mb-3 dropdown">
                            <button className="btn btn-secondary dropdown-toggle w-100" type="button" id="patternFilterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Desen
                            </button>
                            <ul className="dropdown-menu w-100" aria-labelledby="patternFilterDropdown">
                                <li><input className='CheckBox' type="checkbox" id="stripedPattern" /> <label htmlFor="stripedPattern">Çizgili</label></li>
                                <li><input className='CheckBox' type="checkbox" id="polkaPattern" /> <label htmlFor="polkaPattern">Düğme</label></li>
                                <li><input className='CheckBox' type="checkbox" id="plainPattern" /> <label htmlFor="plainPattern">Düz</label></li>
                            </ul>
                        </div>

                        {/* Materyal Dropdown */}
                        <div className="mb-3 dropdown">
                            <button className="btn btn-secondary dropdown-toggle w-100" type="button" id="materialFilterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Materyal
                            </button>
                            <ul className="dropdown-menu w-100" aria-labelledby="materialFilterDropdown">
                                <li><input className='CheckBox' type="checkbox" id="leatherMaterial" /> <label htmlFor="leatherMaterial">Deri</label></li>
                                <li><input className='CheckBox' type="checkbox" id="suedeMaterial" /> <label htmlFor="suedeMaterial">Süet</label></li>
                                <li><input className='CheckBox' type="checkbox" id="knitMaterial" /> <label htmlFor="knitMaterial">Örgü</label></li>
                            </ul>
                        </div>

                        {/* Boy Dropdown */}
                        <div className="mb-3 dropdown">
                            <button className="btn btn-secondary dropdown-toggle w-100" type="button" id="heightFilterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Boy
                            </button>
                            <ul className="dropdown-menu w-100" aria-labelledby="heightFilterDropdown">
                                <li><input className='CheckBox' type="checkbox" id="heightShort" /> <label htmlFor="heightShort">Kısa</label></li>
                                <li><input className='CheckBox' type="checkbox" id="heightMedium" /> <label htmlFor="heightMedium">Orta</label></li>
                                <li><input className='CheckBox' type="checkbox" id="heightTall" /> <label htmlFor="heightTall">Uzun</label></li>
                            </ul>
                        </div>
                        <div>
                            <button type='submit'>Uygula</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SiteMain