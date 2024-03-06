import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/about" className="nav-link">Обо мне</Link></li>
        <li className="nav-item"><Link to="/gallery" className="nav-link">Галерея</Link></li>
        <li className="nav-item"><Link to="/contact" className="nav-link">Связаться</Link></li>
        <li className="nav-item"><Link to="/settings" className="nav-link">Мои проекты</Link></li>
      </ul>
    </nav>

  );
}

export default NavBar;
