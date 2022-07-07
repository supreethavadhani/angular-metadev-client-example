import {
  Injectable
} from "@angular/core";
import {
  Router,
} from '@angular/router'
import {
  BehaviorSubject
} from 'rxjs';
import {
  ConstantsService
} from './constantsService';

import {
  Location
} from '@angular/common';

@Injectable()

export class RouterService {
  private currentRoute = new BehaviorSubject < string > ("");
  constructor(private router: Router, private location: Location) {
    this.router.navigate
  }

  /* ----------------------------------General Routes-------------------------------*/

  openNonSession = function () {
    this.doNavigation(ConstantsService.ROUTE_NON_SESSION);
  }

  private doNavigation = function (route) {
    this.currentRoute.next(route)
    this.router.navigate([route]);
  }

  private doNavigateReplacement = function (route) {
    this.currentRoute.next(route)
    this.router.navigate([route], {
      
      replaceUrl: true
    });
  }
}