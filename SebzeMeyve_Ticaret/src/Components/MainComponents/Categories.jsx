import React from 'react';
import '../../Css/Categories.css';

function Categories() {
  return (
    <div className="CategoriesMain">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Tüm Ürünler
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Sebze</a></li>
          <li><a className="dropdown-item" href="#">Meyve</a></li>
        </ul>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sebzeler
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Kereviz</a></li>
          <li><a className="dropdown-item" href="#">Marul</a></li>
          <li><a className="dropdown-item" href="#">Domates</a></li>
        </ul>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Meyveler
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Elma</a></li>
          <li><a className="dropdown-item" href="#">Armut</a></li>
          <li><a className="dropdown-item" href="#">Muz</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Categories;
