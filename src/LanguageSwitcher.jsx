import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); // Utilise useTranslation pour accéder à i18n
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Change la langue et ferme le menu déroulant
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change la langue
    setIsOpen(false); // Ferme le menu déroulant
  };

  // Gère le clic en dehors du menu déroulant pour le fermer
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

  // Affiche la langue actuelle en majuscules (ou une valeur par défaut)
  const currentLanguage = i18n.language ? i18n.language.toUpperCase() : 'FR';

  return (
    <div className="language-switcher" ref={dropdownRef}>
      {/* Bouton pour ouvrir/fermer le menu déroulant */}
      <button className="language-button" onClick={() => setIsOpen(!isOpen)}>
        🌍 {currentLanguage} ▼
      </button>

      {/* Menu déroulant des langues */}
      {isOpen && (
        <ul className="language-menu">
          <li onClick={() => changeLanguage('fr')}>🇫🇷 Français</li>
          <li onClick={() => changeLanguage('en')}>🇬🇧 English</li>
          <li onClick={() => changeLanguage('es')}>🇪🇸 Español</li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;