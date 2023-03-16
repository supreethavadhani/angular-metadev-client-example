import {
  Component,
  Input
} from '@angular/core';

import { TableTemplateComponent } from 'src/app/framework-modules/formdata/template/tableTemplate/component';

@Component({
  standalone: true,
  selector:'app-student-view',
  template: `<app-table-template [formName]= "form"    [routes]=routes></app-table-template>`,
  imports:[TableTemplateComponent],
  styleUrls: []
})

export class StudentViewComponent {
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
