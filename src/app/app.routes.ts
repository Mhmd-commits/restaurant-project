import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', loadComponent: () => import('./pages/menu/menu.component').then(m => m.MenuComponent) },
  { path: 'reservation', loadComponent: () => import('./pages/reservation/reservation.component').then(m => m.ReservationComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' }
]; 