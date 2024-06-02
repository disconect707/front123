import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';
import './Header.css'; // Путь к вашему файлу стилей

const Header = () => (
  <header>
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logoImage} alt="OLX logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/about">О нас</Link></li>
        <li><Link to="/gallery">Галерея</Link></li>
        <li><Link to="/contact">Контакты</Link></li>
        <li><Link to="/add-listing" className="add-listing-button">Подать объявление</Link></li>
        
      </ul>
    </nav>
  </header>
);

export default Header;