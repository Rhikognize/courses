import axios from 'axios'

const API_URL = 'http://localhost:8000/api/'

export const register = async (username, password) => {
  const response = await axios.post(`${API_URL}register/`, { username, password });
  localStorage.setItem('username', username);  
  return response;
};

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}login/`, { username, password });
  localStorage.setItem('access_token', response.data.access);
  localStorage.setItem('refresh_token', response.data.refresh);
  localStorage.setItem('username', username);
  return response;
};

export const getCurrentUsername = () => {
  return localStorage.getItem('username') || 'Guest';
};

const refreshToken = async () => {
  try {
    const response = await axios.post(`${API_URL}token/refresh/`, {
      refresh: localStorage.getItem('refresh_token'),
    });
    localStorage.setItem('access_token', response.data.access);
    return true;
  } catch (err) {
    console.error('Ошибка обновления токена:', err);
    return false;
  }
};



export const validateUser = async () => {
  const username = localStorage.getItem('username');
  if (!username) return false;

  try {
    const response = await axios.get(`${API_URL}validate-user/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
    return response.data.username;
  } catch (error) {
    // если access токен истёк, попробуем обновить
    const refreshed = await refreshToken();
    if (refreshed) {
      // повторно пробуем запрос
      try {
        const response = await axios.get(`${API_URL}validate-user/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        return response.data.username;
      } catch {
        // даже после обновления не удалось
      }
    }

    // refresh не помог — токены истекли, очищаем
    localStorage.removeItem('username');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    return null;
  }
};

