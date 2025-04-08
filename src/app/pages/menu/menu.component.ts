import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="menu-page">
      <div class="menu-header">
        <h1>Our Menu</h1>
        <div class="menu-search">
          <input type="text" placeholder="Search menu items...">
        </div>
      </div>

      <div class="menu-categories">
        <button class="category-btn active">All</button>
        <button class="category-btn">Starters</button>
        <button class="category-btn">Main Course</button>
        <button class="category-btn">Desserts</button>
        <button class="category-btn">Drinks</button>
      </div>

      <div class="menu-items">
        <div class="menu-item" *ngFor="let item of menuItems">
          <img [src]="item.image" [alt]="item.name">
          <div class="item-info">
            <h3>{{item.name}}</h3>
            <p>{{item.description}}</p>
            <span class="price">{{item.price}}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .menu-page {
      min-height: 100vh;
      padding: 2rem;
    }

    .menu-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .menu-search {
      max-width: 500px;
      margin: 1rem auto;
    }

    .menu-search input {
      width: 100%;
      padding: 0.8rem;
      border: 2px solid #ddd;
      border-radius: 50px;
      font-size: 1rem;
    }

    .menu-search input:focus {
      outline: none;
      border-color: #ff6b6b;
    }

    .menu-categories {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    .category-btn {
      padding: 0.5rem 1.5rem;
      border: none;
      background: #f8f9fa;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .category-btn:hover {
      background: #ff6b6b;
      color: white;
    }

    .category-btn.active {
      background: #ff6b6b;
      color: white;
    }

    .menu-items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .menu-item {
      background: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .menu-item:hover {
      transform: translateY(-5px);
    }

    .menu-item img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .item-info {
      padding: 1rem;
    }

    .item-info h3 {
      margin: 0 0 0.5rem 0;
    }

    .item-info p {
      color: #666;
      margin: 0 0 1rem 0;
    }

    .price {
      font-weight: bold;
      color: #ff6b6b;
    }

    @media (max-width: 768px) {
      .menu-page {
        padding: 1rem;
      }

      .menu-categories {
        gap: 0.5rem;
      }

      .category-btn {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }
    }
  `]
})
export class MenuComponent {
  menuItems = [
    {
      name: 'Truffle Pasta',
      description: 'Handmade pasta with truffle cream sauce and wild mushrooms',
      price: '$24',
      image: 'assets/images/pasta.jpg'
    },
    {
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with lemon butter sauce',
      price: '$28',
      image: 'assets/images/salmon.jpg'
    },
    {
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with vanilla ice cream',
      price: '$12',
      image: 'assets/images/dessert.jpg'
    }
    // Add more menu items as needed
  ];
} 