import { NgModule } from '@angular/core';
import { BaseModule } from '../base.module';
import { RoutingModule } from './routing';
import {ElementsModule} from '../../framework-modules/elements/elements'

@NgModule({
    declarations: [],
    imports: [
        RoutingModule,
        BaseModule,
        ElementsModule
    ],
    exports: [
        BaseModule,
        ElementsModule
    ],
    providers: [
        ElementsModule
    ],
    bootstrap: [],
    schemas: []
})
export class NonSessionModule {
  constructor() {
    // TODO document why this constructor is empty
  
  }
}
