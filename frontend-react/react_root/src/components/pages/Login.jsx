import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../authservice';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { useTranslation } from 'react-i18next';

function Login({ setUsername }) {
  const [username, setUsernameLocal] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();


  const handleLogin = async () => {
    try {
      await login(username, password);
      localStorage.setItem('username', username);
      setUsername(username);
      navigate('/');
    } catch {
      setError('Login failed')
    }
  };

  return (
    <div className='main-container'>
      <div className='input-row'>
        <label>{t('username')}:</label>
        <input className="user-input" value={username} onChange={e => setUsernameLocal(e.target.value)} />
      </div>
      <div className='input-row'><label>{t('password')}:</label><input type="password" value={password} onChange={e => setPassword(e.target.value)} /> </div> <br/>
      <button onClick={handleLogin} className='login-button'>{t('login')}</button>
      <a href="http://localhost:8000/admin" className='login-button' target="_blank" rel="noopener noreferrer">
       {t('admin')}<br/>
      </a>      
      {error && <p className="error-message">{error}</p>}
      <Link className='go-to-register-link' to="/register">{t('register_link')}</Link>
    </div>
  );
}

export default Login;
