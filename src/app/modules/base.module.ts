import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterService } from '../services/routerService';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from '../services/messageService';
import { NonSessionComponent } from './non-session/component';

@NgModule({
    declarations: [

    ],
    imports: [
        RouterModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [],
    exports: [

        RouterModule,
        HttpClientModule,

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
