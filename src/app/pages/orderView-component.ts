import {
  Component,
  Input
} from '@angular/core';

import { tableTemplateComponent } from 'src/app/framework-modules/formdata/template/tableTemplate/component';

@Component({
  standalone: true,
  selector:'app-order-view',
  template: `<app-table-template [formName]= "form"    [routes]=routes></app-table-template>`,
  imports:[tableTemplateComponent],
  styleUrls: []
})

export class orderViewComponent {
  @Input() inputData: any;

  public form;
    public routes;  
  constructor() {
    this.form = "order";
    this.routes = [    {
      "name":"Add a new Record",
      "routeTo":"orderEntry"
    },
    ]
  }
}
