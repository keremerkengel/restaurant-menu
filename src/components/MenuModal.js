import React from 'react';

const MenuModal = ({ item, isOpen, onClose }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
        {/* Kapatma Butonu */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sol Taraf - Resim ve Temel Bilgiler */}
          <div>
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">{item.name}</h2>
              
              <div className="flex items-center justify-between">
                <span className="text-green-600 font-bold text-xl">
                  {item.price} TL
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Değerlendirme */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <span 
                      key={index}
                      className={`text-xl ${
                        index < Math.floor(item.rating) 
                          ? 'text-yellow-400' 
                          : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-600">
                  ({item.reviews} değerlendirme)
                </span>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Detaylı Bilgiler */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Açıklama</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">İçindekiler</h3>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ingredient, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Hazırlama Süresi</h3>
                <p className="text-gray-600">{item.preparationTime}</p>
              </div>
              <div>
                <h3 className="font-semibold">Kalori</h3>
                <p className="text-gray-600">{item.calories}</p>
              </div>
              <div>
                <h3 className="font-semibold">Porsiyon</h3>
                <p className="text-gray-600">{item.portion}</p>
              </div>
            </div>

            {/* Alerjenler */}
            {item.allergens.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Alerjenler</h3>
                <div className="flex flex-wrap gap-2">
                  {item.allergens.map((allergen, index) => (
                    <span 
                      key={index}
                      className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Özellikler */}
            <div className="flex gap-2">
              {item.isVegetarian && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Vejetaryen
                </span>
              )}
              {item.isSpicy && (
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                  Acılı
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;