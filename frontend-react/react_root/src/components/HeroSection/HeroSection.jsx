import { useTranslation } from 'react-i18next';
import '../../App.css';
import './HeroSection.css';
import CourseCarousel from '../CourseCarousel/CourseCarousel'; 

function HeroSection() {





  const { t } = useTranslation(); 
  return (
    <>
      <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>{t('welcome')}</h1>
        <p>{t('description')}</p>
        <div className='hero-btns'>
        </div>
      </div>
      <div className="carousel-wrapper">
        <CourseCarousel />
      </div>
    </>
  );
}

export default HeroSection;
