import {
  Component,
  Input
} from '@angular/core';

import { FormTemplateComponent } from 'src/app/framework-modules/formdata/template/formTemplate/component';

@Component({
  standalone: true,
  selector:'app-student-entry',
  template: `<app-form-template [formName]= "form"    [routes]=routes></app-form-template>`,
  imports:[FormTemplateComponent],
  styleUrls: []
})

export class StudentEntryComponent {
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
