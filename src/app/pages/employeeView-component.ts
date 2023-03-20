import {
  Component,
  Input
} from '@angular/core';

import { tableTemplateComponent } from 'src/app/framework-modules/formdata/template/tableTemplate/component';

@Component({
  standalone: true,
  selector:'app-empolyee-view',
  template: `<app-table-template [formName]= "form"    [routes]=routes></app-table-template>`,
  imports:[tableTemplateComponent],
  styleUrls: []
})

export class employeeViewComponent {
  @Input() inputData: any;

  public form;
    public routes;  
  constructor() {
    this.form = "employee";
    this.routes = [    {
      "name":"Add a new Record",
      "routeTo":"employeeEntry"
    },
    ]
  }
}
