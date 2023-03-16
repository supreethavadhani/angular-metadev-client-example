import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    this.navMenu = [
      {
        "name":"customer entry",
        "routeTo":"customerEntry"
      },
      {
        "name":"customer add",
        "routeTo":"customerAdd"
      },
      {
        "name":"employee entry",
        "routeTo":"customerEntry"
      }
    ]
  }
}
