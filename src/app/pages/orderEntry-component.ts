import {
  Component,
  Input
} from '@angular/core';

import { formTemplateComponent } from 'src/app/framework-modules/formdata/template/formTemplate/component';

@Component({
  standalone: true,
  selector:'app-order-entry',
  template: `<app-form-template [formName]= "form"    [routes]=routes></app-form-template>`,
  imports:[formTemplateComponent],
  styleUrls: []
})

export class orderEntryComponent {
  @Input() inputData: any;

  public form;
    public routes;  
  constructor() {
    this.form = "order";
    this.routes = [    {
      "name":"Save",
      "routeTo":"orderView"
    },    {
      "name":"Navigate",
      "routeTo":"orderView"
    },
    ]
  }
}
