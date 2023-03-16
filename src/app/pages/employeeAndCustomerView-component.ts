import {
  Component,
  Input
} from '@angular/core';

import { TableTemplateWithTwoButtonComponent } from 'src/app/framework-modules/formdata/template/tableTemplateWithTwoButton/component';

@Component({
  standalone: true,
  selector:'app-emp-cust-view',
  template: `<app-two-table-template [formName]= "form"    [routes]=routes></app-two-table-template>`,
  imports:[TableTemplateWithTwoButtonComponent],
  styleUrls: []
})

export class EmployeeAndCustomerViewComponent {
  @Input() inputData: any;

  public form;
    public routes;  
  constructor() {
    this.form = "customer";
    this.routes = [    {
      "name":"Navigate to Employee View",
      "routeTo":"employeeView"
    },    {
      "name":"Navigate to Customer View",
      "routeTo":"customerView"
    },
    ]
  }
}
