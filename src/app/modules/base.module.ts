import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterService } from '../services/routerService';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from '../services/messageService';
import { NonSessionComponent } from './non-session/component';
import { LandingComponent } from './non-session/landing-page/component';
import { ExampleComponent } from './non-session/landing-page/sample-page/component';
import { MVClientCoreAppModule, MVComponentsModule } from 'mv-core';
import { TemplateOneComponent } from './templates/template-1/component';
/**
 * Do not import any angular material module in this file unless it it the only option
 * Material modules to be imported in '../framework-modules/elements/elements.ts'
 */

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
        ExampleComponent,
        TemplateOneComponent,
        /**
         * Session Group Panels
         */
    ],
    imports: [
        RouterModule,
        HttpClientModule,
        MVClientCoreAppModule,
        MVClientCoreAppModule,
        MVComponentsModule
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
        ExampleComponent,
        MVClientCoreAppModule,
        MVComponentsModule,
        TemplateOneComponent,
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
