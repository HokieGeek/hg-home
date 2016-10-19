import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: 'app/tea/app/app.component.html'
})
export class AppComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}
}
