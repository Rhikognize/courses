import { useParams } from 'react-router-dom';
import './CourseUnavailable.css';
import { useTranslation } from 'react-i18next';

export default function CourseUnavailable() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div className="unavailable-container">
      <h1>{title}</h1>
      <p>{t('unfinished')}</p>
      <img src='/images/Crying_Emoji_Icon_2.webp' alt=''></img>

    </div>
  );
}

