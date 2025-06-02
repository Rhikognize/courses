import React from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <h1>{t('contact')}</h1>
      <p>{t('contact_text')}</p>
      <p>+37368348146</p>
      <p>smoshell9@gmail.com</p>
      <p>TG : StasTBOI</p>
    </div>
  );
}

export default Contact;
