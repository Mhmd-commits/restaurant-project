import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Admin.css';

// Sample orders data
const sampleOrders = [
  {
    id: 1,
    customerName: 'John Doe',
    email: 'john@example.com',
    phone: '555-123-4567',
    items: [
      { name: 'Margherita Pizza', quantity: 2, price: 12.99 },
      { name: 'Caesar Salad', quantity: 1, price: 8.99 }
    ],
    total: 34.97,
    status: 'Pending',
    date: '2024-03-20 14:30'
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    email: 'jane@example.com',
    phone: '555-987-6543',
    items: [
      { name: 'Spaghetti Carbonara', quantity: 1, price: 14.99 },
      { name: 'Tiramisu', quantity: 2, price: 6.99 }
    ],
    total: 28.97,
    status: 'Completed',
    date: '2024-03-20 15:15'
  }
];

// Sample menu items data
const sampleMenuItems = [
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
  }
];

const Admin = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState(sampleOrders);
  const [menuItems, setMenuItems] = useState(sampleMenuItems);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleDeleteOrder = (orderId) => {
    setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
  };

  const handleEditItem = (item) => {
    setEditItem(item);
    setIsEditModalOpen(true);
  };

  const handleDeleteItem = (itemId) => {
    setMenuItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const handleSaveItem = (updatedItem) => {
    if (updatedItem.id) {
      setMenuItems(prevItems =>
        prevItems.map(item => (item.id === updatedItem.id ? updatedItem : item))
      );
    } else {
      setMenuItems(prevItems => [
        ...prevItems,
        { ...updatedItem, id: Date.now() }
      ]);
    }
    setIsEditModalOpen(false);
    setEditItem(null);
  };

  return (
    <div className={`admin-page ${theme}`}>
      <div className="admin-container">
        <h1>Admin Dashboard</h1>

        <div className="admin-tabs">
          <button
            className={activeTab === 'orders' ? 'active' : ''}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
          <button
            className={activeTab === 'menu' ? 'active' : ''}
            onClick={() => setActiveTab('menu')}
          >
            Menu Items
          </button>
        </div>

        {activeTab === 'orders' && (
          <div className="orders-section">
            <h2>Recent Orders</h2>
            <div className="orders-list">
              {orders.map(order => (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <h3>Order #{order.id}</h3>
                    <span className={`status-badge ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="order-details">
                    <p><strong>Customer:</strong> {order.customerName}</p>
                    <p><strong>Email:</strong> {order.email}</p>
                    <p><strong>Phone:</strong> {order.phone}</p>
                    <p><strong>Date:</strong> {order.date}</p>
                  </div>
                  <div className="order-items">
                    <h4>Items:</h4>
                    <ul>
                      {order.items.map((item, index) => (
                        <li key={index}>
                          {item.quantity}x {item.name} - ${item.price}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="order-total">
                    <strong>Total:</strong> ${order.total.toFixed(2)}
                  </div>
                  <div className="order-actions">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteOrder(order.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'menu' && (
          <div className="menu-section">
            <div className="menu-header">
              <h2>Menu Items</h2>
              <button
                className="add-button"
                onClick={() => {
                  setEditItem(null);
                  setIsEditModalOpen(true);
                }}
              >
                Add New Item
              </button>
            </div>
            <div className="menu-items-list">
              {menuItems.map(item => (
                <div key={item.id} className="menu-item-card">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="item-meta">
                      <span className="category">{item.category}</span>
                      <span className="price">${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="item-actions">
                    <button
                      className="edit-button"
                      onClick={() => handleEditItem(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {isEditModalOpen && (
          <div className="edit-modal">
            <div className="modal-content">
              <h2>{editItem ? 'Edit Menu Item' : 'Add New Menu Item'}</h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const newItem = {
                  id: editItem?.id,
                  name: formData.get('name'),
                  description: formData.get('description'),
                  price: parseFloat(formData.get('price')),
                  category: formData.get('category'),
                  image: formData.get('image')
                };
                handleSaveItem(newItem);
              }}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={editItem?.name}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    defaultValue={editItem?.description}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    step="0.01"
                    defaultValue={editItem?.price}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    name="category"
                    defaultValue={editItem?.category}
                    required
                  >
                    <option value="Pizza">Pizza</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Salad">Salad</option>
                    <option value="Dessert">Dessert</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="image">Image URL</label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    defaultValue={editItem?.image}
                    required
                  />
                </div>
                <div className="modal-actions">
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={() => {
                      setIsEditModalOpen(false);
                      setEditItem(null);
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="save-button">
                    Save
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

export default Admin; 