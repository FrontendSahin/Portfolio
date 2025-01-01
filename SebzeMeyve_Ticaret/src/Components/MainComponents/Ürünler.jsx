import React from 'react'
import '../../Css/Ürünler.css'
import Header from '../Header'
import { Link } from 'react-router-dom'

function Ürünler() {
  return (
    <>
      <Header />
      <div className="Mainssss">
        <div className="Ürünler">
          <section className="img-container">
            <img 
              src="https://ideacdn.net/idea/et/98/myassets/blogs/blog-191.jpg?revision=1648051296" 
              alt="Sebzeler" 
              className="product-img"
            />
            <Link to="/Sebzeler" className="product-link">Sebzeler</Link>
          </section>
          
          <section className="img-container">
            <img 
              src="https://i.lezzet.com.tr/images-xxlarge-secondary/dunyanin-her-yerinden-9-essiz-meyve-2510919b-6ad7-4b45-b163-3964d2eb9f32.jpg" 
              alt="Meyveler" 
              className="product-img"
            />
            <Link to="/Meyveler" className="product-link">Meyveler</Link>
          </section>
        </div>
      </div>
    </>
  )
}

export default Ürünler
