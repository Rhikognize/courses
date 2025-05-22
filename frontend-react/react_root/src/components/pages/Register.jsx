
import { useState } from 'react';
import { register } from '../../authservice';


import './Login.css'


function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');
  const [success,setSuccess] = useState('')

  const handleRegister = async () => {
  const passwordRegex = /^(?=.*[!@#$%^&*])[\S]{6,}$/;

  if (!passwordRegex.test(password)) {
    setError('Password must be at least 6 characters, no spaces, and include one special character.');
    setSuccess('');
    return;
  }
    try {
      
      await register(username, password);
      setSuccess('Registered successfully.Please,login!');
      setError('')
    } catch {
      setError('Registration failed!');
      setSuccess('')
    }
  };

  return (
    
      <div className='main-container'>
        <div className='input-row'>
          <label>Username:</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      </div>
        <div className='input-row'>
          <label>Password:</label>
      <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      </div>
      <button onClick={handleRegister} className='login-button'>Register</button>
      {error && <p className='error-message'>{error}</p>} {success && <p className='success-message'>{success}</p>}

    </div>
  );
}

export default Register;
