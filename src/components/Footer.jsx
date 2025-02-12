import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import '../App.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="footer">
      <p>{t('footer')}</p>
      <Link to="/contact" className="back-button">
        Contact us
      </Link>
    </footer>
  );
};

export default Footer;
