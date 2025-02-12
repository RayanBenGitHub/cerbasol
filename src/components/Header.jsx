import React, { useState } from 'react';  
import { useTranslation } from 'react-i18next';
import '../App.css';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from 'react-router-dom';

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">{t('welcome')}</div>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/contact">{t('contact')}</Link></li>
          <li className="language-switcher-item">
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;