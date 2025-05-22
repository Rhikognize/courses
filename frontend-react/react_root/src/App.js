import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Products from './components/pages/Products';
import {useEffect, useState } from 'react';
import { validateUser } from './authservice';
import './components/i18n';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Privacy from './components/pages/Privacy';

function App() {

  const [username, setUsername] = useState(localStorage.getItem('username') || 'Guest');
useEffect(() => {
  const checkUser = async () => {
    const validUsername = await validateUser();
    if (validUsername) {
      setUsername(validUsername);
    } else {
      setUsername('Guest');
      localStorage.removeItem('username');
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    }
  };
  checkUser();
}, []);


  return (
    <div>
      <Router>
        <Navbar username={username}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login setUsername={setUsername} />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/privacy" element={<Privacy/>} />
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
