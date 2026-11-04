import React, { useState } from 'react';
import { useCart, MenuItem } from '../context/CartContext';

const menuItems: MenuItem[] = [
  { id: 1, name: 'Jollof Rice & Chicken', price: 3500, description: 'Smoky party-style jollof rice served with grilled chicken and salad', category: 'Rice', image: '🍚' },
  { id: 2, name: 'Fried Rice Special', price: 3000, description: 'Colorful fried rice with mixed vegetables, prawns and chicken', category: 'Rice', image: '🍛' },
  { id: 3, name: 'Pounded Yam & Egusi', price: 4000, description: 'Smooth pounded yam with rich egusi soup, assorted meat and stockfish', category: 'Swallow', image: '🥘' },
  { id: 4, name: 'Amala & Ewedu', price: 3500, description: 'Soft amala with ewedu soup, gbegiri and assorted meats', category: 'Swallow', image: '🍲' },
  { id: 5, name: 'Pepper Soup (Goat Meat)', price: 5000, description: 'Spicy goat meat pepper soup with traditional spices and herbs', category: 'Soup', image: '🥣' },
  { id: 6, name: 'Grilled Fish & Plantain', price: 4500, description: 'Fresh catfish grilled to perfection with fried plantain and pepper sauce', category: 'Grills', image: '🐟' },
  { id: 7, name: 'Suya Platter', price: 3000, description: 'Spicy grilled beef suya with onions, tomatoes and yaji spice', category: 'Grills', image: '🥩' },
  { id: 8, name: 'Ofada Rice & Sauce', price: 4500, description: 'Local ofada rice with designer stew, assorted meat and fried plantain', category: 'Rice', image: '🍚' },
  { id: 9, name: 'Chicken Pepper Soup', price: 4000, description: 'Aromatic chicken pepper soup with utazi and traditional spices', category: 'Soup', image: '🍜' },
  { id: 10, name: 'White Rice & Stew', price: 2500, description: 'Fluffy white rice with rich tomato stew, fried chicken and coleslaw', category: 'Rice', image: '🍚' },
  { id: 11, name: 'Abacha (African Salad)', price: 2500, description: 'Traditional Igbo salad with cassava strips, ugba, and palm oil dressing', category: 'Specials', image: '🥗' },
  { id: 12, name: 'Nkwobi', price: 3500, description: 'Spicy cow foot delicacy in palm oil sauce with utazi leaves', category: 'Specials', image: '🦴' },
  { id: 13, name: 'Chapman Drink', price: 1500, description: 'Refreshing Nigerian cocktail with fruits and fizzy drinks', category: 'Drinks', image: '🍹' },
  { id: 14, name: 'Zobo Drink', price: 1000, description: 'Natural hibiscus drink with ginger and pineapple', category: 'Drinks', image: '🥤' },
  { id: 15, name: 'Puff Puff (10pcs)', price: 1000, description: 'Sweet golden fried dough balls, freshly made', category: 'Snacks', image: '🧁' },
  { id: 16, name: 'Meat Pie (2pcs)', price: 1500, description: 'Flaky pastry filled with seasoned minced meat', category: 'Snacks', image: '🥧' },
];

const categories = ['All', 'Rice', 'Swallow', 'Soup', 'Grills', 'Specials', 'Drinks', 'Snacks'];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<number[]>([]);

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    setAddedItems(prev => [...prev, item.id]);
    setTimeout(() => {
      setAddedItems(prev => prev.filter(id => id !== item.id));
    }, 1500);
  };

  return (
    <section id="menu" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">Delicious Dishes</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Explore our carefully curated menu of authentic Nigerian cuisine, prepared fresh daily
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-700 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              {/* Image area */}
              <div className="h-40 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{item.image}</span>
                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 rounded-full text-xs font-medium text-amber-700">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-lg mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-amber-600">₦{item.price.toLocaleString()}</span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 ${
                      addedItems.includes(item.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:shadow-lg transform hover:-translate-y-0.5'
                    }`}
                  >
                    {addedItems.includes(item.id) ? '✓ Added' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
