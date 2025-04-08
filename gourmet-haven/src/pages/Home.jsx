import { Link } from 'react-router-dom';
import { FaUtensils, FaCalendarAlt, FaShoppingBag } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Gourmet Haven</h1>
          <p>Experience the finest culinary journey with our carefully crafted dishes</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">View Menu</Link>
            <Link to="/reservation" className="btn btn-outline">Book a Table</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Discover Our Services</h2>
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">
                <FaUtensils />
              </div>
              <h3>Exquisite Cuisine</h3>
              <p>Experience the art of fine dining with our signature dishes prepared by award-winning chefs.</p>
              <Link to="/menu" className="feature-link">Explore Menu</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaCalendarAlt />
              </div>
              <h3>Reserve a Table</h3>
              <p>Book your dining experience in advance to secure the perfect table for your special occasion.</p>
              <Link to="/reservation" className="feature-link">Make Reservation</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaShoppingBag />
              </div>
              <h3>Online Ordering</h3>
              <p>Enjoy our gourmet dishes from the comfort of your home with our convenient online ordering system.</p>
              <Link to="/order" className="feature-link">Order Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Specials */}
      <section className="section specials">
        <div className="container">
          <h2 className="section-title">Daily Specials</h2>
          <div className="specials-container">
            <div className="special-item">
              <div className="special-image">
                <img src="https://images.unsplash.com/photo-1544025162-d76694265947" alt="Chef's Special Pasta" />
              </div>
              <div className="special-content">
                <h3>Chef's Special Pasta</h3>
                <p className="special-description">
                  Handmade pasta with truffle cream sauce, wild mushrooms, and aged parmesan.
                </p>
                <p className="special-price">$24.99</p>
                <button className="btn btn-secondary">Add to Order</button>
              </div>
            </div>

            <div className="special-item">
              <div className="special-image">
                <img src="https://images.unsplash.com/photo-1572715376701-98568319fd0b" alt="Grilled Sea Bass" />
              </div>
              <div className="special-content">
                <h3>Grilled Sea Bass</h3>
                <p className="special-description">
                  Fresh sea bass grilled to perfection, served with roasted vegetables and lemon herb sauce.
                </p>
                <p className="special-price">$32.99</p>
                <button className="btn btn-secondary">Add to Order</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section reviews">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="grid grid-3">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "The dining experience at Gourmet Haven was exceptional. The flavors were exquisite, and the service was impeccable."
              </p>
              <div className="review-author">- Emily Johnson</div>
            </div>

            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "Every dish here tells a story. The chef's creativity and attention to detail make each visit a culinary adventure."
              </p>
              <div className="review-author">- Michael Chen</div>
            </div>

            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "From the ambiance to the food presentation, everything was perfect. Gourmet Haven truly lives up to its name."
              </p>
              <div className="review-author">- Sophia Rodriguez</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Culinary Excellence?</h2>
            <p>Join us for an unforgettable dining experience or order online for delivery.</p>
            <div className="cta-buttons">
              <Link to="/reservation" className="btn btn-primary">Book a Table</Link>
              <Link to="/order" className="btn btn-secondary">Order Online</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 