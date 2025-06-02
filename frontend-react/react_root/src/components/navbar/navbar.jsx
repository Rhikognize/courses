import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import ThemeToggle from '../ThemeToggle';
import LanguageSwitcher from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';


function Navbar({ username }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { t } = useTranslation();

 




  const downloadCoursesExcel = async () => {
  try {
const response = await fetch('http://localhost:8000/export-courses/');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();  
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'courses.xlsx';
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    alert('Не удалось скачать файл: ' + error.message);
  }
};
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {t('hello')} {username}
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
  <li className='nav-item'>
    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
      {t('home')}
    </Link>
  </li>
  <li className='nav-item'>
    <Link  className='nav-links' onClick={downloadCoursesExcel}>
      {t('export')}
    </Link>
  </li>
  <li className='nav-item'>
    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
      {t('products')}
    </Link>
  </li>
  <li className='nav-item'>
    <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
      {t('login')}
    </Link>
  </li>

  <li className='nav-item'>
    <ThemeToggle />
  </li>
  <li className='nav-item'>
    <LanguageSwitcher />
  </li>
</ul>



        </div>
      </nav>
    </>
  );
}

export default Navbar;
