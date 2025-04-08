import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Order.css';

// Sample menu items data
const menuItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic tomato sauce, mozzarella, and basil',
    price: 12.99,
    category: 'Pizza',
    image: '/images/margherita.jpg'
  },
  {
    id: 2,
    name: 'Spaghetti Carbonara',
    description: 'Pasta with eggs, cheese, pancetta, and black pepper',
    price: 14.99,
    category: 'Pasta',
    image: '/images/carbonara.jpg'
  },
  {
    id: 3,
    name: 'Caesar Salad',
    description: 'Romaine lettuce, croutons, parmesan, and Caesar dressing',
    price: 8.99,
    category: 'Salad',
    image: '/images/caesar.jpg'
  },
  {
    id: 4,
    name: 'Tiramisu',
    description: 'Coffee-flavored Italian dessert',
    price: 6.99,
    category: 'Dessert',
    image: '/images/tiramisu.jpg'
  }
];

const Order = () => {
  const { theme } = useTheme();
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    deliveryInstructions: ''
  });

  const categories = ['All', ...new Set(menuItems.map(item => item.category))];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    console.log('Order submitted:', { cart, orderDetails });
    // Reset the cart and close checkout
    setCart([]);
    setIsCheckoutOpen(false);
    alert('Order placed successfully!');
  };

  return (
    <div className={`order-page ${theme}`}>
      <div className="order-container">
        <h1>Order Online</h1>
        
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-items">
          {filteredItems.map(item => (
            <div key={item.id} className="menu-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="item-price">${item.price.toFixed(2)}</div>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={`cart-sidebar ${cart.length > 0 ? 'active' : ''}`}>
          <div className="cart-header">
            <h2>Your Cart</h2>
            <span className="cart-count">{cart.length} items</span>
          </div>
          
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)} × {item.quantity}</p>
                </div>
                <div className="cart-item-controls">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <span>Total:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>

          <button
            className="checkout-button"
            onClick={() => setIsCheckoutOpen(true)}
            disabled={cart.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>

        {isCheckoutOpen && (
          <div className="checkout-modal">
            <div className="checkout-content">
              <h2>Checkout</h2>
              <form onSubmit={handleSubmitOrder}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={orderDetails.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={orderDetails.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={orderDetails.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Delivery Address</label>
                  <textarea
                    id="address"
                    name="address"
                    value={orderDetails.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="deliveryInstructions">Delivery Instructions (Optional)</label>
                  <textarea
                    id="deliveryInstructions"
                    name="deliveryInstructions"
                    value={orderDetails.deliveryInstructions}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="checkout-buttons">
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={() => setIsCheckoutOpen(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="submit-order">
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order; 