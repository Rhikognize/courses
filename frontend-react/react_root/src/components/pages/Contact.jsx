import React from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <h1>{t('Contact')}</h1>
      <p>{t('If you have any questions, feel free to reach out via email or our social media pages.')}</p>
      <p>+37368348146</p>
      <p>smoshell9@gmail.com</p>
      <p>TG : StasTBOI</p>
    </div>
  );
}

export default Contact;
