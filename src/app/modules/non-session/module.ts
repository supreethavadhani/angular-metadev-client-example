import { NgModule } from '@angular/core';
import { BaseModule } from '../base.module';
import { NonSessionComponent } from './component';
import { RoutingModule } from './routing';
import {ElementsModule} from '../../framework-modules/elements/elements'
import { CardElementsModule } from '../../framework-modules/cards/cardElements'


@NgModule({
    declarations: [],
    imports: [
        RoutingModule,
        BaseModule,
        ElementsModule,
        CardElementsModule
    ],
    exports: [
        BaseModule,
        ElementsModule,
        CardElementsModule
    ],
    providers: [
        ElementsModule,
        CardElementsModule
    ],
    bootstrap: [],
    schemas: []
})
export class NonSessionModule {
  constructor() {
  }
}
