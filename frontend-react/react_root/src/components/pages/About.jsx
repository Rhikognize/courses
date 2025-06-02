import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <h1>{t('about')}</h1>
      <p>{t('about_text')}</p>
    </div>
  );
}

export default About;
