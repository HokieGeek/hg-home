import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  template: `<h2>HOUSE STUFF</h2>`
})
export class AppComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}
}
