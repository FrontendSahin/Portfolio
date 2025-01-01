import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import sebzeler from '../../../SebzeData';
import meyveler from '../../../MeyveData';
import '../../Css/Ürün.css';
import Header from '../Header';

function Ürün() {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams(); // URL'den id'yi al

    // Sebze ve meyve verilerinden ürün bul
    const product =
        sebzeler.find((item) => item.id === id) ||
        meyveler.find((item) => item.id === id);

    // Eğer ürün bulunamazsa hata mesajı göster
    if (!product) {
        return <h2>Ürün bulunamadı. Lütfen tekrar deneyin.</h2>;
    }

    // Sepete ürün eklemek
    const addToCart = () => {
        const cartItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: quantity,
            img: product.img,
        };

        // Sepeti localStorage'da sakla
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Ürün zaten sepette varsa, miktarını artır
        const existingItemIndex = cart.findIndex((item) => item.id === cartItem.id);
        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += quantity; // Miktarı artır
        } else {
            cart.push(cartItem); // Yeni ürün ekle
        }

        localStorage.setItem('cart', JSON.stringify(cart)); // Sepeti güncelle
        alert('Ürün sepete eklendi!');
    };

    return (
        <>
            <Header />
            <div className="product-detail">
                <div className="img">
                    <img src={product.img} alt={product.title} />
                </div>
                <h1>{product.title}</h1>
                <p>Birim: {product.unit}</p>
                <p>Fiyat: {product.price}</p>
                <div className="PieceAdd">
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        min="1"
                        max="100"
                    />
                    <button onClick={addToCart} className="btn">Sepete Ekle</button>
                </div>
            </div>
        </>
    );
}

export default Ürün;
