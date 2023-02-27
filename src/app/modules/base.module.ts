import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterService } from '../services/routerService';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from '../services/messageService';
import { NonSessionComponent } from './non-session/component';
import { LandingComponent } from './non-session/landing-page/component';

@NgModule({
    declarations: [
        /**
         * All components to be declared here
         */
        /**
        * Landing Componenet
        */
        NonSessionComponent,
        LandingComponent,
        /**
         * Non Session Group Panels
         */
        /**
         * Session Group Panels
         */
    ],
    imports: [
        RouterModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [],
    exports: [
        /**
         * App Components
         */
        RouterModule,
        HttpClientModule,
        /**
         * All components to be declared here
         */
        /**
        * Landing Componenet
        */
        NonSessionComponent,
        LandingComponent,
        /**
         * Non Session Group Panels
         */
        /**
         * Session Group Panels
         */
    ],
    schemas: []
})
export class BaseModule {
  static forRoot(): ModuleWithProviders<BaseModule> {
    return {
      ngModule: BaseModule,
      providers: [
        RouterService,
        MessageService
      ]
    };
  }

}
