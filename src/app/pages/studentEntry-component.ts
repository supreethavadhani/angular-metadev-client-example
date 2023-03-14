import {
  Component,
  Input
} from '@angular/core';

import { formTemplateComponent } from 'src/app/framework-modules/formdata/template/formTemplate/component';

@Component({
  standalone: true,
  selector:'app-student-entry',
  template: `<app-form-template [formName]= "form"></app-form-template>`,
  imports:[formTemplateComponent],
  styleUrls: []
})

export class studentEntryComponent {
  @Input() inputData: any;

  public form
  
  constructor() {
    this.form = "student"
  }
}
