import React, { useEffect } from "react";
import './css/body.css';

function Body() {
    useEffect(() => {
        const starContainer = document.createElement("div");
        starContainer.className = "stars";
        document.body.appendChild(starContainer);

        const totalStars = 100; // Yıldız sayısı

        function createStar() {
            const star = document.createElement("div");
            star.className = "star";

            // Rastgele konumlandırma
            const randomLeft = Math.random() * window.innerWidth; // Ekranın tamamında rastgele
            const randomTop = Math.random() * window.innerHeight; // Ekranın tamamında rastgele
            const randomDelay = Math.random() * 5; // Rastgele animasyon gecikmesi

            star.style.left = `${randomLeft}px`;
            star.style.top = `${randomTop}px`; // Başlangıç noktası ekranın herhangi bir yeri olabilir
            star.style.animationDelay = `${randomDelay}s`; // Yıldızların rastgele animasyon gecikmesi

            star.style.animation = `fall ${Math.random() * 3 + 2}s infinite linear`; // Aşağıya doğru düşüş animasyonu

            starContainer.appendChild(star);

            // Yıldız ekranın altına düştüğünde yenisini oluşturmak için
            setTimeout(() => {
                star.remove(); // Yıldızı kaldır
                createStar(); // Yeni yıldız ekle
            }, (Math.random() * 3 + 2) * 1000); // Yıldızın animasyon süresi kadar bekle
        }

        // Başlangıçta belirtilen sayıda yıldız oluştur
        for (let i = 0; i < totalStars; i++) {
            createStar();
        }

        return () => {
            // Komponent unmount olduğunda yıldızları temizlemek için
            document.body.removeChild(starContainer);
        };
    }, []);

    return null;
}

export default Body;
