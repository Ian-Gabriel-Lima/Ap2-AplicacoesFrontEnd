import { useFetch } from '../hooks/useFetch';
import { getWeatherUrl } from '../services/api';

export default function ItemCard({ city, onRemove }) {
  const { data: weather, loading, error } = useFetch(getWeatherUrl(city));

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex justify-center items-center h-64 animate-pulse">
        <p className="text-blue-500 font-semibold">A carregar {city}...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-6 rounded-xl shadow-md border border-red-100 flex flex-col justify-center items-center h-64 relative">
        <button onClick={() => onRemove(city)} className="absolute top-2 right-2 text-red-400 hover:text-red-700">✕</button>
        <p className="text-red-600 font-bold text-center">Erro ao carregar "{city}"</p>
        <p className="text-red-400 text-sm text-center mt-2">Verifique o nome e tente novamente.</p>
      </div>
    );
  }

  if (!weather) return null;

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center relative hover:shadow-lg transition-shadow">
      <button 
        onClick={() => onRemove(city)}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
        title="Remover"
      >
        ✕
      </button>
      <h2 className="text-xl font-bold text-gray-800">{weather.name}</h2>
      <p className="text-gray-500 text-sm">{weather.sys.country}</p>
      
      <img src={iconUrl} alt={weather.weather[0].description} className="w-24 h-24 drop-shadow-sm" />
      
      <p className="text-4xl font-extrabold text-blue-600 mb-2">
        {Math.round(weather.main.temp)}°C
      </p>
      <p className="text-gray-600 capitalize font-medium">
        {weather.weather[0].description}
      </p>
      
      <div className="flex gap-4 mt-4 w-full text-sm text-gray-600 justify-center">
        <div className="bg-gray-50 p-2 rounded-lg text-center w-full">
          <p className="font-bold">Humidade</p>
          <p>{weather.main.humidity}%</p>
        </div>
        <div className="bg-gray-50 p-2 rounded-lg text-center w-full">
          <p className="font-bold">Vento</p>
          <p>{weather.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}
