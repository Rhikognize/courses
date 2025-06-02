import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = ['EN', 'RO', 'RU'];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'EN')
  
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const handleChange = (newLang) => {
    setLanguage(newLang);
  };

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => handleChange(lang)}
          className={`lang-btn ${language === lang ? 'active' : ''}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;