import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './About.css';

const About = () => {
  const { theme } = useTheme();

  const teamMembers = [
    {
      id: 1,
      name: 'Chef Michael Rossi',
      role: 'Head Chef',
      bio: 'With over 20 years of experience in Italian cuisine, Chef Michael brings authentic flavors and innovative techniques to our kitchen.',
      image: '/images/chef-michael.jpg'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Pastry Chef',
      bio: 'Sarah\'s passion for desserts and pastries has earned her recognition in several culinary competitions.',
      image: '/images/chef-sarah.jpg'
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Sous Chef',
      bio: 'David\'s expertise in Asian fusion cuisine adds a unique twist to our traditional Italian dishes.',
      image: '/images/chef-david.jpg'
    }
  ];

  return (
    <div className={`about-page ${theme}`}>
      <div className="about-container">
        <section className="hero-section">
          <h1>Our Story</h1>
          <p className="hero-description">
            Welcome to Gourmet Haven, where passion for food meets exceptional dining experience.
          </p>
        </section>

        <section className="story-section">
          <div className="story-content">
            <h2>The Beginning</h2>
            <p>
              Founded in 2010, Gourmet Haven started as a small family-owned restaurant with a simple mission:
              to serve authentic Italian cuisine with a modern twist. Over the years, we've grown into a beloved
              dining destination, known for our commitment to quality ingredients and exceptional service.
            </p>
            <p>
              Our journey has been guided by the belief that great food brings people together. Every dish we
              serve tells a story, combining traditional recipes with contemporary culinary techniques.
            </p>
          </div>
          <div className="story-image">
            <img src="/images/restaurant-interior.jpg" alt="Restaurant interior" />
          </div>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Quality Ingredients</h3>
              <p>
                We source the finest local and imported ingredients to ensure every dish meets our high standards.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Passion for Food</h3>
              <p>
                Our team's dedication to culinary excellence is evident in every dish we create.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community</h3>
              <p>
                We believe in building lasting relationships with our customers and supporting our local community.
              </p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="awards-section">
          <h2>Our Achievements</h2>
          <div className="awards-grid">
            <div className="award-card">
              <div className="award-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>Best Italian Restaurant 2023</h3>
              <p>City Food Awards</p>
            </div>
            <div className="award-card">
              <div className="award-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Michelin Star 2022</h3>
              <p>Michelin Guide</p>
            </div>
            <div className="award-card">
              <div className="award-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>Excellence in Service 2021</h3>
              <p>Hospitality Awards</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 