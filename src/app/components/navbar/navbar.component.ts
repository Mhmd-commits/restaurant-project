import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="nav-container">
        <a routerLink="/" class="logo">Gourmet Haven</a>
        <div class="nav-links" [class.active]="isMenuOpen">
          <a routerLink="/" (click)="closeMenu()">Home</a>
          <a routerLink="/menu" (click)="closeMenu()">Menu</a>
          <a routerLink="/reservation" (click)="closeMenu()">Reservation</a>
          <a routerLink="/about" (click)="closeMenu()">About</a>
          <a routerLink="/contact" (click)="closeMenu()">Contact</a>
        </div>
        <div class="burger" (click)="toggleMenu()" [class.active]="isMenuOpen">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 1rem 2rem;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      z-index: 1000;
      transition: all 0.3s ease;
    }

    .navbar.scrolled {
      background: rgba(0, 0, 0, 0.95);
      padding: 0.5rem 2rem;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .logo:hover {
      color: #ff6b6b;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-links a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;
      position: relative;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: #ff6b6b;
      transition: width 0.3s ease;
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    .burger {
      display: none;
      cursor: pointer;
    }

    .line {
      width: 25px;
      height: 3px;
      background: white;
      margin: 5px;
      transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
      .nav-links {
        position: fixed;
        right: -100%;
        top: 70px;
        height: calc(100vh - 70px);
        background: rgba(0, 0, 0, 0.95);
        flex-direction: column;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        padding: 2rem;
      }

      .nav-links.active {
        right: 0;
      }

      .burger {
        display: block;
      }

      .burger.active .line:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
      }

      .burger.active .line:nth-child(2) {
        opacity: 0;
      }

      .burger.active .line:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
      }
    }
  `]
})
export class NavbarComponent {
  isMenuOpen = false;
  isScrolled = false;

  constructor() {
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
} 