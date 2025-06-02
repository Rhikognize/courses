import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 {t('All rights reserved')} | Stas's corp</p>
        <div className="footer-links">
          <Link to="/about">{t('about')}</Link>
          <Link to="/contact">{t('contact')}</Link>
          <Link to="/privacy">{t('privacy')}</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
