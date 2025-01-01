import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation(); // Geçerli URL'nin yolunu al

    useEffect(() => {
        // Her URL değişiminde sayfanın en üstüne kaydır
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // Hiçbir şey render etmiyor
}

export default ScrollToTop;
