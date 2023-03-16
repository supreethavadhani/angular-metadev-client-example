import {
  Component,
  Input
} from '@angular/core';

import { TableTemplateComponent } from 'src/app/framework-modules/formdata/template/tableTemplate/component';

@Component({
  standalone: true,
  selector:'app-empolyee-view',
  template: `<app-table-template [formName]= "form"    [routes]=routes></app-table-template>`,
  imports:[TableTemplateComponent],
  styleUrls: []
})

export class EmployeeViewComponent {
  @Input() inputData: any;

  public form;
    public routes;  
  constructor() {
    this.form = "employee";
    this.routes = [    {
      "name":"Navigate to Customer Entry",
      "routeTo":"customerEntry"
    },    {
      "name":"Navigate to Employee Entry",
      "routeTo":"employeeEntry"
    },    {
      "name":"Navigate to Customer View",
      "routeTo":"customerView"
    },    {
      "name":"Navigate to Employee View",
      "routeTo":"employeeView"
    },
    ]
  }
}
