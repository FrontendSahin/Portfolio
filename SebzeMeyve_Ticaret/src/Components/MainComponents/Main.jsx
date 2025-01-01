import React, { useState} from 'react';
import '../../Css/Main.css';
import { Link } from 'react-router-dom';
import SebzeVeMeyve from '../../../SebzeVeMeyve';
import Header from '../Header';

function Main() {
  

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query); // Arama sorgusunu güncelle
  };

  const filteredData = SebzeVeMeyve.filter(({ title }) =>
    title && title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header onSearch={handleSearch} /> {/* Header'a onSearch fonksiyonunu gönder */}
      <div className='MainDiv'>
        <h1 className='h1'>Sebzeler ve Meyveler</h1>
        <hr />
        <div className='AllCard'>
          <div className="container">
            {filteredData.map(({ id, img, title, price, unit }) => (
              <div className="card" key={id}>
                <div className="img">
                  <img src={img} alt={title} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">
                    <span className="unit">{unit}</span> <span className="price">{price}</span>
                  </p>
                  <Link to={`/Ürün/${id}`} className="btn">Ürüne Git</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
