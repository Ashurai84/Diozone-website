import React, { useState } from 'react';
import { X } from 'react-feather'; // Ensure this package is installed or replace with an alternative close icon.

const categories = {
  Flour: [
    {
      name: 'Almond Flour',
      price: '₹350 for 500gm',
      description: 'Almond flour is a low-carb, high-protein option ideal for diabetic patients. It helps in stabilizing blood sugar levels and provides healthy fats.',
    },
    {
      name: 'Peanut Flour',
      price: '₹300 for 500gm',
      description: 'Peanut flour is rich in protein and healthy fats, helping control blood sugar levels. It’s a great diabetic-friendly option for baking and cooking.',
    },
    {
      name: 'Coconut Flour',
      price: '₹350 for 500gm',
      description: 'Coconut flour is high in fiber, which slows the absorption of sugar and helps control blood sugar levels, making it a suitable choice for diabetics.',
    },
    {
      name: 'Soya Flour',
      price: '₹150 for 500gm',
      description: 'Soya flour is rich in protein and low in carbohydrates, which makes it ideal for maintaining stable blood sugar levels in diabetics.',
    },
    {
      name: 'Oats',
      price: '₹100 for 500gm',
      description: 'Oats flour is high in soluble fiber, which helps reduce cholesterol and regulates blood sugar levels, making it a great diabetic-friendly flour.',
    },
  ],
  Drinks: [
    {
      name: 'Green Tea',
      price: '₹200',
      description: 'Boost your health with green tea! It helps regulate blood sugar, supports insulin sensitivity, and is packed with antioxidants—perfect for managing diabetes naturally.',
    },
    {
      name: 'Black Tea',
      price: '₹300',
      description: 'Support your health with bold black tea! It helps regulate blood sugar and boosts heart health—perfect for managing diabetes.',
    },
    {
      name: 'Turmeric Tea',
      price: '₹500',
      description: 'Boost wellness with turmeric tea! Its anti-inflammatory power helps balance blood sugar and supports overall health.',
    },
  ],
  'Cake Mix and Chocolates': [
    {
      name: 'Non-Veg Batter',
      price: '₹100 for 250gm',
      description: 'Enjoy your favorite non-veg dishes without the worry! Our diabetic-friendly non-veg batter is made with low-glycemic, natural ingredients, helping you indulge safely while keeping blood sugar in check.',
    },
    {
      name: 'Pumpkin Pancake Mix',
      price: '₹1500 for 300gm',
      description: 'Delight in the rich, comforting taste of pumpkin cake without the guilt! Our specially crafted mix is low-glycemic, perfect for managing blood sugar while enjoying a delicious treat.',
    },
    {
      name: 'Cocoa Chocolates',
      price: '₹450 for 250gm',
      description: 'Indulge in rich cocoa chocolate that satisfies your sweet cravings without the sugar spike! Made with natural, low-glycemic ingredients.',
    },
  ],
  Sweeteners: [
    {
      name: 'Natural Sweetener',
      price: '₹300',
      description: 'Sweeten your day the healthy way! Our natural sweetener with stevia offers all the sweetness you crave without the sugar or calories—perfect for managing blood sugar and supporting a healthier lifestyle.',
    },
  ],
  'Fruity Flavors Sugar': [
    {
      name: 'Apple Sugar',
      price: '₹250 for 150gm',
      description: 'Experience the natural sweetness of apple sugar—your perfect, healthier substitute for regular sugar!',
    },
    {
      name: 'Banana Sugar',
      price: '₹250 for 150gm',
      description: 'Experience the rich, natural sweetness of banana sugar—an ideal, diabetic-friendly alternative to traditional sugar!',
    },
    {
      name: 'Orange Sugar',
      price: '₹250 for 150gm',
      description: 'Delight in the tangy sweetness of orange sugar—your best choice for a natural, guilt-free sugar substitute.',
    },
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
            const prices = products.map((product) => parseFloat(product.price.match(/\d+/g)?.[0] || 0));
            const minPrice = Math.min(...prices);
            const maxPrice = Math.max(...prices);

            const imageUrl = categoryImages[
              Object.keys(categoryImages).find((key) =>
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
                    Price Range: ₹{minPrice} - ₹{maxPrice}
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
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(255, 182, 193, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
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
                  <div
                    key={`${selectedCategory}-${index}`}
                    className="p-4 border rounded-lg"
                  >
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-gray-600 text-sm mt-1">Price: {product.price}</p>
                    <p className="text-gray-600 text-sm mt-1">{product.description}</p>
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
