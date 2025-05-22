import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CourseCarousel.css';
import { useTranslation } from 'react-i18next';

function CourseCarousel() {
  const [courses, setCourses] = useState([]);
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  const descriptions = [
    t('descr_1'),
    t('descr_2'),
    t('descr_3'),
    t('descr_4'),
    t('descr_5'),
  ];

  const images = [
    '/images/python.png',
    '/images/node-js.png',
    '/images/react.webp',
    '/images/vs-code.png',
    '/images/c++.png',
  ];

  useEffect(() => {
    axios.get('http://localhost:8000/wel/')
      .then(res => {
        const limitedCourses = res.data.slice(0, 5); // максимум 5 курсов
        setCourses(limitedCourses);
      })
      .catch(err => console.error('Ошибка загрузки курсов:', err));
  }, []);

  useEffect(() => {
    if (courses.length === 0) return;
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % courses.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [courses]);

  const prevSlide = () => setIndex(prev => (prev - 1 + courses.length) % courses.length);
  const nextSlide = () => setIndex(prev => (prev + 1) % courses.length);

  if (courses.length === 0) return <div>{t('Loading...')}</div>;

  const coursesArray = courses.map((course, i) => ({
    ...course,
    description: descriptions[i] || '',
    image: images[i] || '/images/hqdefault.jpg',
  }));

  return (
    <div className="carousel-container">
      <h2 className="hot-courses">{t('hot_courses')}</h2>

      <div className="carousel-slide-wrapper">
        <div
          className="carousel-slides"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {coursesArray.map((course, i) => (
            <div key={i} className="carousel-slide">
              <div className="carousel-image-wrapper">
                <img src={course.image} alt={course.title} />
              </div>
              <h2>{t(course.title)}</h2>
              <p>{t(course.description)}</p>

              <div className="arrow left" onClick={prevSlide}>&#10094;</div>
              <div className="arrow right" onClick={nextSlide}>&#10095;</div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots">
        {coursesArray.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseCarousel;
