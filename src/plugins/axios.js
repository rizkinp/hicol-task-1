// src/plugins/axios.js

import axios from 'axios';

// Membuat instance Axios baru
const instance = axios.create({
  baseURL: 'http://localhost:8080', // Atur baseURL sesuai dengan URL backend Anda
});

// Menambahkan interceptor request
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
