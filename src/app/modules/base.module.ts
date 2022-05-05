import { MenuService } from '../services/menuService';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterService } from '../services/routerService';
import { ExcelDownloadService } from '../services/excelDownloadService';
import { RouterModule } from '@angular/router';
import { ElementsModule } from '../framework-modules/elements/elements'
import { CardElementsModule } from '../framework-modules/cards/cardElements';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MessageService } from '../services/messageService';
import { NonSessionComponent } from './non-session/component';
import { LandingComponent } from './non-session/landing-page/component';
import { ExampleComponent } from './non-session/landing-page/sample-page/component';
import { PdfDownloadService } from '../services/pdfDownloadService';
import { ExcelParserService } from '../services/excelParserService';
import { JsPDFFontService } from '../services/jsPdfFontService';


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
        /**
         * Session Group Panels
         */
    ],
    imports: [
        RouterModule,
        ElementsModule,
        CardElementsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [],
    exports: [
        /**
         * App Components
         */
        RouterModule,
        ElementsModule,
        CardElementsModule,
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
        MessageService,
        ExcelDownloadService,
        JsPDFFontService,
        MenuService,
        PdfDownloadService,
        ExcelParserService
      ]
    };
  }

}
