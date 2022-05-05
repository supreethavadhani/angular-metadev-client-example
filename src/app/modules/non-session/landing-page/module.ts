import { NgModule } from '@angular/core';
import { ElementsModule } from 'src/app/framework-modules/elements/elements';
import { BaseModule } from '../../base.module';



@NgModule({
  declarations: [
  ],
  imports: [
    ElementsModule,
    BaseModule,
  ],
  exports:[],
  providers: [],
  bootstrap: [], 
  schemas: []
})
export class LandingModule {
  constructor() {
  }
}
