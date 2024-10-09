// src/utils/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api',
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      //Desde aca podria manejar los errores de manera global
      console.error('Error en la respuesta:', error.response);
    }else {
      console.error('Error inesperado:', error.message);
    }
    
    return Promise.reject(error);
  }
);


export default axiosInstance;
