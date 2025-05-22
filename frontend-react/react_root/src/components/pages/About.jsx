import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <h1>{t('About')}</h1>
      <p>{t('This project was created to demonstrate a simple React application with internationalization.')}</p>
    </div>
  );
}

export default About;
