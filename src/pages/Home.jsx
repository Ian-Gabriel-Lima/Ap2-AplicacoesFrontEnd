import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import ItemList from '../components/ItemList';

export default function Home() {
  const [cities, setCities] = useState(['Brasilia', 'São Paulo']);

  const handleSearch = (cityName) => {
    const cityLower = cityName.toLowerCase();
    if (!cities.some(c => c.toLowerCase() === cityLower)) {
      setCities([cityName, ...cities]);
    }
  };

  const handleRemoveCity = (cityToRemove) => {
    setCities(cities.filter(city => city !== cityToRemove));
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed p-6 md:p-12 font-sans"
      style={{ backgroundImage: "url('https://static.preparaenem.com/2022/08/momentos-climaticos.jpg')" }}
    >
      <div
        className="max-w-6xl mx-auto p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-400"
        style={{ backgroundColor: '#cbd5e1' }}
      >
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            🌤️ ClimaTech 🌓
          </h1>
          <p className="text-gray-600 font-medium">Consulte o clima nas suas cidades favoritas</p>
        </header>

        <SearchForm onSearch={handleSearch} />

        <ItemList cities={cities} onRemoveCity={handleRemoveCity} />
      </div>
    </div>
  );
}
