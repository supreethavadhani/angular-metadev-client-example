import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements AfterViewInit{
  constructor( private router: Router) {
  }
  ngAfterViewInit(): void {
    this.router.navigate(['employee'])
  }
}
