import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

api.interceptors.request.use((config) => {
  config.url = `${config.url}&units=metric&appid=6a4623f9086a9971320253741df1a21c`;
  return config;
});

export default api;
