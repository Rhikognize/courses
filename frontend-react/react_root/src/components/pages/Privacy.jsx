import React from 'react';
import { useTranslation } from 'react-i18next';

function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <h1>{t('privacy')}</h1>
      <p>{t('privacy_text')}</p>
    </div>
  );
}

export default Privacy;
