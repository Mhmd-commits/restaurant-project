import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Gourmet Haven</h1>
        <p>Experience the finest dining in town</p>
        <div class="hero-buttons">
          <a routerLink="/menu" class="btn primary">View Menu</a>
          <a routerLink="/reservation" class="btn secondary">Make Reservation</a>
        </div>
      </div>
    </section>

    <section class="featured">
      <div class="container">
        <h2>Our Specialties</h2>
        <div class="specialties-grid">
          <div class="specialty-card" *ngFor="let specialty of specialties">
            <img [src]="specialty.image" [alt]="specialty.name">
            <h3>{{specialty.name}}</h3>
            <p>{{specialty.description}}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <div class="container">
        <h2>What Our Guests Say</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card" *ngFor="let testimonial of testimonials">
            <div class="rating">
              <span *ngFor="let star of [1,2,3,4,5]">★</span>
            </div>
            <p class="quote">"{{testimonial.quote}}"</p>
            <p class="author">- {{testimonial.author}}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 800px;
      padding: 0 20px;
    }

    .hero h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
      animation: fadeInUp 1s ease;
    }

    .hero p {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      animation: fadeInUp 1s ease 0.3s;
      opacity: 0;
      animation-fill-mode: forwards;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      animation: fadeInUp 1s ease 0.6s;
      opacity: 0;
      animation-fill-mode: forwards;
    }

    .btn {
      padding: 1rem 2rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.3s ease;
    }

    .btn.primary {
      background: #ff6b6b;
      color: white;
    }

    .btn.secondary {
      background: transparent;
      border: 2px solid white;
      color: white;
    }

    .btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .featured {
      padding: 5rem 0;
      background: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .specialties-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .specialty-card {
      background: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .specialty-card:hover {
      transform: translateY(-10px);
    }

    .specialty-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .specialty-card h3 {
      padding: 1rem;
      margin: 0;
    }

    .specialty-card p {
      padding: 0 1rem 1rem;
      margin: 0;
      color: #666;
    }

    .testimonials {
      padding: 5rem 0;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .testimonial-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .rating {
      color: #ffd700;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .quote {
      font-style: italic;
      margin-bottom: 1rem;
    }

    .author {
      font-weight: bold;
      color: #666;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2.5rem;
      }

      .hero p {
        font-size: 1.2rem;
      }

      .hero-buttons {
        flex-direction: column;
      }

      .btn {
        width: 100%;
        text-align: center;
      }
    }
  `]
})
export class HomeComponent {
  specialties = [
    {
      name: 'Signature Pasta',
      description: 'Handmade pasta with truffle cream sauce',
      image: 'assets/images/pasta.jpg'
    },
    {
      name: 'Grilled Seafood',
      description: 'Fresh catch of the day with seasonal vegetables',
      image: 'assets/images/seafood.jpg'
    },
    {
      name: 'Artisan Desserts',
      description: 'Handcrafted desserts made with love',
      image: 'assets/images/dessert.jpg'
    }
  ];

  testimonials = [
    {
      quote: 'The best dining experience I\'ve had in years. The food was exceptional and the service was impeccable.',
      author: 'John Doe'
    },
    {
      quote: 'Every dish was a masterpiece. The attention to detail and flavors were outstanding.',
      author: 'Jane Smith'
    },
    {
      quote: 'A perfect blend of ambiance, service, and culinary excellence. Highly recommended!',
      author: 'Mike Johnson'
    }
  ];
} 