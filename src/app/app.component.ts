import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnimatedBackgroundComponent } from './components/animated-background/animated-background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AnimatedBackgroundComponent],
  template: `
    <app-animated-background></app-animated-background>
    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    main {
      min-height: 100vh;
      padding-top: 70px;
    }
  `]
})
export class AppComponent {
  title = 'Gourmet Haven';
} 