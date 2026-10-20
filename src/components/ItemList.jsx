import ItemCard from './ItemCard';

export default function ItemList({ cities, onRemoveCity }) {
  if (cities.length === 0) {
    return (
      <p className="text-center text-gray-500 font-medium mt-8">
        Nenhuma cidade pesquisada ainda.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
      {cities.map((city) => (
        <ItemCard 
          key={city} 
          city={city} 
          onRemove={onRemoveCity} 
        />
      ))}
    </div>
  );
}
