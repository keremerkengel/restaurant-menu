import React, { useState, useMemo } from 'react';
import { menuItems } from './data/menuData';
import MenuCard from './components/MenuCard';
import MenuFilter from './components/MenuFilter';
import MenuModal from './components/MenuModal';

function App() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [sortOption, setSortOption] = useState("default");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = useMemo(() => {
    return [...new Set(menuItems.map(item => item.category))];
  }, []);

  const filteredAndSortedItems = useMemo(() => {
    let items = [...menuItems];
    
    // Kategori filtresi
    if (activeCategory !== "Tümü") {
      items = items.filter(item => item.category === activeCategory);
    }
    
    // Fiyat sıralaması
    if (sortOption === "priceAsc") {
      items.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceDesc") {
      items.sort((a, b) => b.price - a.price);
    }
    
    return items;
  }, [activeCategory, sortOption]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Restoran Menümüz
      </h1>

      <MenuFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onSortChange={setSortOption}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedItems.map(item => (
          <MenuCard
            key={item.id}
            item={item}
            onClick={handleItemClick}
          />
        ))}
      </div>

      <MenuModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;