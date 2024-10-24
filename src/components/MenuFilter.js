import React from 'react';

const MenuFilter = ({ categories, activeCategory, onCategoryChange, onSortChange }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          className={`px-4 py-2 rounded-md transition-colors ${
            activeCategory === "Tümü" 
              ? "bg-blue-500 text-white" 
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => onCategoryChange("Tümü")}
        >
          Tümü
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeCategory === category 
                ? "bg-blue-500 text-white" 
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="default">Sıralama</option>
        <option value="priceAsc">Fiyat: Düşükten Yükseğe</option>
        <option value="priceDesc">Fiyat: Yüksekten Düşüğe</option>
      </select>
    </div>
  );
};

export default MenuFilter;