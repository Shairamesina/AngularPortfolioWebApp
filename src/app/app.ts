import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Home } from './feature/home/home';
import { Loader } from './shared/loader/loader';
import { ParticleBackground } from './shared/particle-background/particle-background';
import { About } from './feature/about/about';
import { Experience } from './feature/experience/experience';
import { Contact } from './feature/contact/contact';
import { Skills } from './feature/skills/skills';
import { BeyondCode } from './feature/beyond-code/beyond-code';

@Component({
  imports: [RouterOutlet, Header, Home, Loader, ParticleBackground, About, Experience, Contact, Skills, BeyondCode],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {

  ngOnInit(): void {
    if (window.location.hash) {
      history.replaceState(
        null,
        '',
        window.location.pathname
      );

      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    }
  }
  protected readonly title = signal('AngularPortfolioWebApp');
}
