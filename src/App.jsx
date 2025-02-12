import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; 
import LanguageSwitcher from './components/LanguageSwitcher';
import './i18n.jsx';
import { useTranslation } from 'react-i18next';
import AppRoutes from './routes';

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Header />

      <nav className="navbar">
        <div className="logo">{t('welcome')}</div>
        <ul className="nav-links">
          <li><Link to="/">{t('home')}</Link></li>
          <li><Link to="/contact">{t('contact')}</Link></li>
          <li className="language-switcher-item">
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>

      <AppRoutes />

      <Footer />
    </div>
  );
};

export default App;
