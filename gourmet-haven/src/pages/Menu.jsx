import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Menu.css';

// Mock menu data (in a real app, this would come from an API)
const menuData = {
  appetizers: [
    {
      id: 1,
      name: 'Truffle Arancini',
      description: 'Crispy risotto balls with black truffle and mozzarella',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58',
      tags: ['Vegetarian', 'Contains Gluten'],
    },
    {
      id: 2,
      name: 'Tuna Tartare',
      description: 'Fresh tuna with avocado, soy-sesame dressing, and wonton crisps',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1582349279840-9d2a5b689d47',
      tags: ['Seafood', 'Gluten Free'],
    },
    {
      id: 3,
      name: 'Burrata & Heirloom Tomatoes',
      description: 'Creamy burrata with heirloom tomatoes, basil oil, and aged balsamic',
      price: 16.99,
      image: 'https://images.unsplash.com/photo-1505575967455-40e256f73376',
      tags: ['Vegetarian', 'Gluten Free'],
    },
  ],
  mainCourses: [
    {
      id: 4,
      name: 'Filet Mignon',
      description: '8oz grass-fed filet with truffle butter and garlic mashed potatoes',
      price: 42.99,
      image: 'https://images.unsplash.com/photo-1559847844-5315695dadae',
      tags: ['Beef', 'Gluten Free'],
    },
    {
      id: 5,
      name: 'Herb Crusted Salmon',
      description: 'Wild-caught salmon with lemon-dill sauce and seasonal vegetables',
      price: 32.99,
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2',
      tags: ['Seafood', 'Gluten Free'],
    },
    {
      id: 6,
      name: 'Wild Mushroom Risotto',
      description: 'Creamy arborio rice with assorted wild mushrooms and parmesan',
      price: 26.99,
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371',
      tags: ['Vegetarian', 'Gluten Free'],
    },
  ],
  desserts: [
    {
      id: 7,
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center and vanilla ice cream',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1611329695518-1763fc1fac1a',
      tags: ['Vegetarian', 'Contains Gluten'],
    },
    {
      id: 8,
      name: 'Crème Brûlée',
      description: 'Classic vanilla bean custard with caramelized sugar crust',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1615302878260-9a803c04bd68',
      tags: ['Vegetarian', 'Gluten Free'],
    },
    {
      id: 9,
      name: 'Berry Pavlova',
      description: 'Light meringue topped with fresh berries and whipped cream',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81',
      tags: ['Vegetarian', 'Gluten Free'],
    },
  ],
  beverages: [
    {
      id: 10,
      name: 'Signature Cocktails',
      description: 'Seasonal craft cocktails made with premium spirits',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813',
      tags: ['Alcoholic'],
    },
    {
      id: 11,
      name: 'Artisanal Wine Selection',
      description: 'Curated selection of wines from around the world',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1553361371-9b22f78e9b1f',
      tags: ['Alcoholic'],
    },
    {
      id: 12,
      name: 'Premium Coffee & Tea',
      description: 'Specialty coffee and loose leaf tea selections',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
      tags: ['Non-Alcoholic'],
    },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
    // In a full implementation, we would check if the item is already in the cart
    // and increment the quantity instead of adding a new item
  };

  // Filter menu items based on search term
  const filteredMenuItems = searchTerm
    ? Object.values(menuData)
        .flat()
        .filter(item => 
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    : menuData[activeCategory];

  return (
    <div className="menu-page">
      <div className="menu-header">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Experience the finest culinary creations, crafted with passion and the freshest ingredients</p>
          
          <div className="menu-search">
            <div className="search-input">
              <FaSearch />
              <input 
                type="text" 
                placeholder="Search menu items..." 
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          
          {!searchTerm && (
            <div className="menu-categories">
              <button 
                className={activeCategory === 'appetizers' ? 'active' : ''} 
                onClick={() => handleCategoryChange('appetizers')}
              >
                Appetizers
              </button>
              <button 
                className={activeCategory === 'mainCourses' ? 'active' : ''} 
                onClick={() => handleCategoryChange('mainCourses')}
              >
                Main Courses
              </button>
              <button 
                className={activeCategory === 'desserts' ? 'active' : ''} 
                onClick={() => handleCategoryChange('desserts')}
              >
                Desserts
              </button>
              <button 
                className={activeCategory === 'beverages' ? 'active' : ''} 
                onClick={() => handleCategoryChange('beverages')}
              >
                Beverages
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="menu-content">
        <div className="container">
          <div className="menu-items">
            {filteredMenuItems.map((item) => (
              <div className="menu-item" key={item.id}>
                <div className="menu-item-image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>
                <div className="menu-item-content">
                  <div className="menu-item-info">
                    <h3>{item.name}</h3>
                    <p className="price">${item.price.toFixed(2)}</p>
                  </div>
                  <p className="description">{item.description}</p>
                  <div className="menu-item-footer">
                    <div className="tags">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => addToCart(item)}
                    >
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu; 