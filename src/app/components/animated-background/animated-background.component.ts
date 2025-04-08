import { Component, OnInit } from '@angular/core';
import { h } from 'preact';
import { signal } from '@preact/signals';

@Component({
  selector: 'app-animated-background',
  template: `
    <div class="animated-background">
      <div class="particles" *ngFor="let particle of particles()">
        <div class="particle" [style.left]="particle.x + 'px'" [style.top]="particle.y + 'px'"></div>
      </div>
    </div>
  `,
  styles: [`
    .animated-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      overflow: hidden;
    }

    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      animation: float 15s infinite linear;
    }

    @keyframes float {
      0% {
        transform: translateY(0) translateX(0);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100vh) translateX(100px);
        opacity: 0;
      }
    }
  `]
})
export class AnimatedBackgroundComponent implements OnInit {
  particles = signal<Array<{x: number, y: number}>>([]);

  ngOnInit() {
    // Create initial particles
    const initialParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    }));
    this.particles.set(initialParticles);

    // Animate particles
    setInterval(() => {
      this.particles.set(
        this.particles().map(particle => ({
          x: particle.x + (Math.random() - 0.5) * 2,
          y: particle.y - 1
        })).filter(particle => particle.y > -20)
      );

      // Add new particles
      if (this.particles().length < 50) {
        this.particles.set([
          ...this.particles(),
          {
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 20
          }
        ]);
      }
    }, 50);
  }
} 