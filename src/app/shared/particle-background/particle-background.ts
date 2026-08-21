import { Component, OnInit } from '@angular/core';
import {
  NgxParticlesModule,
  NgParticlesService
} from '@tsparticles/angular';

import type {
  Engine,
  ISourceOptions
} from '@tsparticles/engine';

import { loadSlim } from '@tsparticles/slim';

@Component({
  selector: 'app-particle-background',
  imports: [NgxParticlesModule],
  templateUrl: './particle-background.html',
  styleUrl: './particle-background.scss'
})
export class ParticleBackground implements OnInit {

  particlesId = 'tsparticles';

  particlesOptions: ISourceOptions = {

    fullScreen: {
      enable: false
    },

    background: {
      color: {
        value: 'transparent'
      }
    },

    fpsLimit: 60,

    particles: {
      number: {
        value: 100,
        density: {
          enable: true
        }
      },

      color: {
        value: 'var(--particle-dot-color, #0d0e0f)',
        animation: {
          enable: false,
          speed: 0,
          sync: true
        }
      },

      shape: {
        type: 'circle'
      },

      opacity: {
        value: 0.35,
      },

      size: {
        value: {
          min: 2,
          max: 4
        }
      },

      links: {
        enable: true,
        distance: 150,
        color: '#8b5cf6',
        opacity: 0.35,
        width: 1.2
      },

      move: {
        enable: true,
        speed: 1.2,
        direction: 'none',
        random: true,
        straight: false,

        outModes: {
          default: 'out'
        }
      }
    },
    interactivity: {

      events: {

        onHover: {
          enable: true,
          mode: 'grab'
        },

        onClick: {
          enable: false
        },

        resize: {
          enable: true
        }
      },

      modes: {

        grab: {
          distance: 160,

          links: {
            opacity: 0.7
          }
        }
      }
    },

    detectRetina: true
  };

  constructor(
    private readonly particlesService: NgParticlesService
  ) { }


  ngOnInit(): void {

    void this.particlesService.init(
      async (engine: Engine) => {
        await loadSlim(engine);
      }
    );

  }
}