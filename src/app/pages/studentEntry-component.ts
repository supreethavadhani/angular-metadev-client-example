import {
  Component,
  Input
} from '@angular/core';

import { formTemplateComponent } from 'src/app/framework-modules/formdata/template/formTemplate/component';

@Component({
  standalone: true,
  selector:'app-student-entry',
  template: `<app-form-template [formName]= "form"    [routes]=routes></app-form-template>`,
  imports:[formTemplateComponent],
  styleUrls: []
})

export class studentEntryComponent {
  @Input() inputData: any;

  public form;
    public routes;  
  constructor() {
    this.form = "student";
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
