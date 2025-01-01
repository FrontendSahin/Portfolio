import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/MainComponents/Main';
import Footer from './Components/Footer';
import Sebzeler from './Components/MainComponents/Sebzeler';
import Meyveler from './Components/MainComponents/Meyveler';
import Ürün from './Components/MainComponents/Ürün';
import Ürünler from './Components/MainComponents/Ürünler'
import ScrollToTop from '../ScrollToTop';
import Sepet from './Components/Sepet';

function App() {
  return (
    <BrowserRouter>
      {/* ScrollToTop tüm rotalar için çalışacak */}
      <ScrollToTop />

      {/* Rotalar */}
      <Routes>
        {/* Ana sayfa */}
        <Route path="/" element={<Main />} />

        <Route path="/Ürünler" element={<Ürünler />} />


        {/* Sebzeler */}
        <Route path="/Sebzeler" element={<Sebzeler />} />

        {/* Meyveler */}
        <Route path="/Meyveler" element={<Meyveler />} />

        {/* Ürün */}
        <Route path="/Ürün/:id" element={<Ürün />} />

        <Route path="/Sepet" element={<Sepet />} />

        <Route path="/Sepet/:id" element={<Sepet />} />
      </Routes>
      <Footer />

      {/* Footer her sayfada görünecek */}
    </BrowserRouter>
  );
}

export default App;
