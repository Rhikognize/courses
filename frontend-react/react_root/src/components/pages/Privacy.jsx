import React from 'react';
import { useTranslation } from 'react-i18next';

function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <h1>{t('Privacy')}</h1>
      <p>{t('We respect your privacy and do not collect personal data without your consent.')}</p>
    </div>
  );
}

export default Privacy;
