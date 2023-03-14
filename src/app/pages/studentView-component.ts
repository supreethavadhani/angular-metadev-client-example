import {
  Component,
  Input
} from '@angular/core';

import { tableTemplateComponent } from 'src/app/framework-modules/formdata/template/tableTemplate/component';

@Component({
  standalone: true,
  selector:'app-student-view',
  template: `<app-table-template [formName]= "form"></app-table-template>`,
  imports:[tableTemplateComponent],
  styleUrls: []
})

export class studentViewComponent {
  @Input() inputData: any;

  public form
  
  constructor() {
    this.form = "student"
  }
}
