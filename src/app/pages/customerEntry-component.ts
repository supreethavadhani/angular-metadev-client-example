import {
  Component,
  Input
} from '@angular/core';

import { formTemplateComponent } from 'src/app/framework-modules/formdata/template/formTemplate/component';

@Component({
  standalone: true,
  selector:'app-customer-entry',
  template: `<app-form-template [formName]= "form"    [routes]=routes></app-form-template>`,
  imports:[formTemplateComponent],
  styleUrls: []
})

export class customerEntryComponent {
  @Input() inputData: any;

  public form;
    public routes;  
  constructor() {
    this.form = "customer";
    this.routes = [    {
      "name":"Save",
      "routeTo":"customerView"
    },    {
      "name":"Navigate",
      "routeTo":"customerView"
    },
    ]
  }
}
