import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { navMenu } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  public navMenu;
  public appName = "Customer Management ERP";
  constructor( private router: Router) {
    this.navMenu = navMenu 
    // this.router.navigate(['customerList']);
  }

  public routeTo($event) {
    this.router.navigate([$event])
  }
}
