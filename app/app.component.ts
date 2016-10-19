import { Component } from '@angular/core';

@Component({
  selector: 'hokiegeek-app',
  template: `
    <nav>
      <a routerLink="" routerLinkActive="active">home</a>
      <a routerLink="/tea" routerLinkActive="active">tea</a>
      <a routerLink="/house" routerLinkActive="active">house</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
