const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherUrl = (city) => {
  return `${BASE_URL}/weather?q=${city}&units=metric&lang=pt_br&appid=${API_KEY}`;
};