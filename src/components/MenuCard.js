import React from 'react';

const MenuCard = ({ item, onClick }) => {
  return (
    <div 
      className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onClick(item)}
    >
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-bold">{item.name}</h3>
      <p className="text-gray-600 mt-1 h-12 overflow-hidden">{item.description}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-green-600 font-bold">{item.price} TL</p>
        <span className="text-sm text-gray-500">{item.category}</span>
      </div>
    </div>
  );
};

export default MenuCard;