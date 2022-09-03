import { NgModule } from '@angular/core';
import { BaseModule } from '../base.module';
import { RoutingModule } from './routing';

@NgModule({
    declarations: [],
    imports: [
        RoutingModule,
        BaseModule,
    ],
    exports: [
        BaseModule,
    ],
    providers: [
    ],
    bootstrap: [],
    schemas: []
})
export class NonSessionModule {
  constructor() {
    // TODO document why this constructor is empty
  
  }
}
