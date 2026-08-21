import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  isDarkMode = true;
  
 toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    document.body.classList.toggle(
      'light-theme',
      !this.isDarkMode
    );
  }

}
