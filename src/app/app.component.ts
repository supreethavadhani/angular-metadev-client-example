import { Component, AfterViewInit } from '@angular/core';
import { RouterService } from './services/routerService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RouterService]
})
export class AppComponent implements AfterViewInit {
  constructor(private routerService: RouterService) {
  }
  ngAfterViewInit() {
    this.routerService.openNonSession();
  }
}
