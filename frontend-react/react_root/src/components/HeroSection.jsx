import { useTranslation } from 'react-i18next';
import '../App.css';
import { Button } from './button';
import './HeroSection.css';
import CourseCarousel from './CourseCarousel'; 

function HeroSection() {





  const { t } = useTranslation(); 
  return (
    <>
      <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>{t('description')}</h1>
        <p>{t('welcome')}</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            {t('getStarted')}
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            {t('about')} <i className='far fa-play-circle' />
          </Button>
        </div>
      </div>
      <div className="carousel-wrapper">
        <CourseCarousel />
      </div>
    </>
  );
}

export default HeroSection;
