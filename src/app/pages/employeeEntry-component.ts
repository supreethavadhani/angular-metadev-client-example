import {
  Component,
  Input
} from '@angular/core';

import { formTemplateComponent } from 'src/app/framework-modules/formdata/template/formTemplate/component';

@Component({
  standalone: true,
  selector:'app-empolyee-entry',
  template: `<app-form-template [formName]= "form"    [routes]=routes></app-form-template>`,
  imports:[formTemplateComponent],
  styleUrls: []
})

export class employeeEntryComponent {
  @Input() inputData: any;

  public form;
    public routes;  
  constructor() {
    this.form = "employee";
    this.routes = [    {
      "name":"Save",
      "routeTo":"employeeView"
    },    {
      "name":"Navigate",
      "routeTo":"employeeView"
    },
    ]
  }
}
