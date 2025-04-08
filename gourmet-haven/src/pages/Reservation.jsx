import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Reservation.css';

const Reservation = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.guests) newErrors.guests = 'Number of guests is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Here you would typically send the reservation to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        specialRequests: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate time slots from 11:00 AM to 10:00 PM
  const timeSlots = [];
  for (let hour = 11; hour <= 22; hour++) {
    timeSlots.push(`${hour}:00`, `${hour}:30`);
  }

  return (
    <div className={`reservation-page ${theme}`}>
      <div className="reservation-container">
        <div className="reservation-header">
          <h1>Make a Reservation</h1>
          <p className="reservation-description">
            Book your table at Gourmet Haven for an unforgettable dining experience.
            We recommend making reservations at least 24 hours in advance.
          </p>
        </div>

        <div className="reservation-content">
          <form onSubmit={handleSubmit} className="reservation-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <span id="name-error" className="error-message" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span id="email-error" className="error-message" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error' : ''}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <span id="phone-error" className="error-message" role="alert">
                  {errors.phone}
                </span>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={errors.date ? 'error' : ''}
                  aria-invalid={!!errors.date}
                  aria-describedby={errors.date ? 'date-error' : undefined}
                />
                {errors.date && (
                  <span id="date-error" className="error-message" role="alert">
                    {errors.date}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="time">Time</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={errors.time ? 'error' : ''}
                  aria-invalid={!!errors.time}
                  aria-describedby={errors.time ? 'time-error' : undefined}
                >
                  <option value="">Select a time</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.time && (
                  <span id="time-error" className="error-message" role="alert">
                    {errors.time}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className={errors.guests ? 'error' : ''}
                  aria-invalid={!!errors.guests}
                  aria-describedby={errors.guests ? 'guests-error' : undefined}
                >
                  <option value="1">1 person</option>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                  <option value="5">5 people</option>
                  <option value="6">6 people</option>
                  <option value="7">7 people</option>
                  <option value="8">8 people</option>
                </select>
                {errors.guests && (
                  <span id="guests-error" className="error-message" role="alert">
                    {errors.guests}
                  </span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="specialRequests">Special Requests (Optional)</label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Make Reservation'}
            </button>

            {submitStatus === 'success' && (
              <div className="success-message" role="alert">
                Your reservation has been confirmed! We'll send you a confirmation email shortly.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="error-message" role="alert">
                Sorry, there was an error processing your reservation. Please try again later.
              </div>
            )}
          </form>

          <div className="reservation-info">
            <h2>Reservation Information</h2>
            <div className="info-card">
              <h3>Hours of Operation</h3>
              <p>Monday - Sunday: 11:00 AM - 10:00 PM</p>
            </div>
            <div className="info-card">
              <h3>Contact Information</h3>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: reservations@gourmethaven.com</p>
            </div>
            <div className="info-card">
              <h3>Reservation Policy</h3>
              <ul>
                <li>Reservations can be made up to 30 days in advance</li>
                <li>Please arrive within 15 minutes of your reservation time</li>
                <li>Large groups (8+ people) require special arrangements</li>
                <li>Cancellations must be made at least 2 hours in advance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation; 