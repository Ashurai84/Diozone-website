import React, { useState } from 'react';
import { X } from 'lucide-react';

const categories = {
  'Flour': [
    { name: 'Almond Flour', price: '$10' },
    { name: 'Peanut Flour', price: '$8' },
    { name: 'Coconut Flour', price: '$12' },
    { name: 'Soya Flour', price: '$9' },
    { name: 'Oats Flour', price: '$7' },
  ],
  'Drinks': [
    { name: 'Green Tea', price: '$5' },
    { name: 'Black Tea', price: '$6' },
    { name: 'Turmeric Tea', price: '$7' },
  ],
  'Cake Mix and Chocolates': [
    { name: 'Non-Veg Batter', price: '$15' },
    { name: 'Pumpkin Pancake Mix', price: '$13' },
    { name: 'Cocoa Chocolates', price: '$20' },
  ],
  'Sweeteners': [
    { name: 'Natural Sweetener', price: '$25' },
  ],
  'Fruity Flavors Sugar': [
    { name: 'Apple Sugar', price: '$14' },
    { name: 'Banana Sugar', price: '$13' },
    { name: 'Orange Sugar', price: '$15' },
  ],
};

const categoryImages = {
  Flour: '1509440159596-0249088772ff',
  Drinks: '1544787219-7f47ccb8004d',
  Cake: '1578985545286-68a3e87f242f',
  Sweeteners: '1558642452-9d2a7deb7f62',
  Default: '1457518919282-b199744eefd6',
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  
  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#29524A]">
          Our Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.keys(categories).map((category) => {
            const products = categories[category];
            const prices = products.map(product => parseFloat(product.price.slice(1)));
            const minPrice = Math.min(...prices);
            const maxPrice = Math.max(...prices);

            const imageUrl = categoryImages[
              Object.keys(categoryImages).find(key =>
                category.toLowerCase().includes(key.toLowerCase())
              ) || 'Default'
            ];

            return (
              <div
                key={category}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
                onClick={() => setSelectedCategory(category)}
              >
                <div className="h-48 bg-gray-200">
                  <img
                    src={`https://images.unsplash.com/photo-${imageUrl}`}
                    alt={category}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category}</h3>
                  <p className="text-gray-600 mb-2">
                    {products.length} products available
                  </p>
                  <p className="text-gray-600 mb-4">
                    Price Range: ${minPrice} - ${maxPrice}
                  </p>
                  <button className="text-[#29524A] font-medium hover:underline">
                    View Products →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {selectedCategory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-lg w-full mx-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">{selectedCategory}</h3>
                <button
                  onClick={() => setSelectedCategory('')}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="space-y-4">
                {categories[selectedCategory]?.map((product, index) => (
                  <div key={`${selectedCategory}-${index}`} className="p-4 border rounded-lg">
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-gray-600 text-sm mt-1">Price: {product.price}</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Premium quality, diabetic-friendly option
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
