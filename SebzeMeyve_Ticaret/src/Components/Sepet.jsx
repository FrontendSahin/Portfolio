import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import '../Css/Sepet.css';
import SebzeVeMeyve from '../../SebzeVeMeyve';
function Sepet() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query); // Arama sorgusunu güncelle
    };

    const filteredData = SebzeVeMeyve.filter(({ title }) =>
        title && title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // localStorage'dan sepeti al
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    // Sepet öğesini silme
    const removeItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Sepeti güncelle
    };
    // Toplam fiyat hesaplama (fiyatı sayıya dönüştürme)
    const totalPrice = cart.reduce((total, item) => {
        // Fiyatı '₺' simgesini kaldırarak sayıya dönüştür
        const price = parseFloat(item.price.replace('₺', '').trim());
        return total + price * item.quantity;
    }, 0).toFixed(2); // Toplam fiyatı 2 ondalıklı formatta göster

    // Arama sorgusuna göre sepetteki öğeleri filtrele
    const filteredCart = cart.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const increaseQuantity = (id) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                item.quantity += 1;
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Sepeti güncelle
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id && item.quantity > 1) {
                item.quantity -= 1;
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Sepeti güncelle
    };
    const purchase = () => {
        if (cart.length > 0) {
            // Sepet dolu, alışveriş başarılı
            alert("Alışverişiniz Başarılı!");
        }
    };

    return (
        <>
            <Header onSearch={handleSearch} /> {/* Header'a onSearch fonksiyonunu gönder */}
            <div className="cart-container">
                {filteredCart.length > 0 ? (
                    filteredCart.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <div className="cart-item-image">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="cart-item-details">
                                <h3 className="cart-item-title">{item.title}</h3>
                                <p className="cart-item-description">
                                    {item.price}
                                </p>
                                <div className="quantity-controls">
                                    <button
                                        className="quantity-btn"
                                        onClick={() => decreaseQuantity(item.id)}
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        className="quantity-btn"
                                        onClick={() => increaseQuantity(item.id)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="cart-item-actions">
                                <button className="remove-btn" onClick={() => removeItem(item.id)}>Kaldır</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <h2>Sepetiniz Boş</h2>
                )}

                <div className="cart-summary">
                    <div className="total">
                        <span>Toplam: </span>
                        <span className="total-price">₺{totalPrice}</span>
                    </div>
                    <button onClick={purchase} className="checkout-btn">Alışverişi Tamamla</button>
                </div>
            </div>

        </>
    );
}

export default Sepet;
