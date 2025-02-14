import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); 
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
    setIsOpen(false); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentLanguage = i18n.language ? i18n.language.toUpperCase() : 'FR';

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button className="language-button" onClick={() => setIsOpen(!isOpen)}>
      </button>

      {isOpen && (
        <ul className="language-menu">
          <li onClick={() => changeLanguage('fr')}>🇫🇷 Français</li>
          <li onClick={() => changeLanguage('en')}>🇬🇧 English</li>
          <li onClick={() => changeLanguage('es')}>🇪🇸 Español</li>
          <li onClick={() => changeLanguage('de')}>de Deutsch</li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;