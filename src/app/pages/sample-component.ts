import {
  Component,
  Input
} from '@angular/core';

import { formTemplateComponent } from 'src/app/framework-modules/formdata/template/formTemplate/component';
import { tableTemplateComponent } from 'src/app/framework-modules/formdata/template/tableTemplate/component';

@Component({
  standalone: true,
  selector:'app-sample',
  template: `<app-form-template [formName]= "form"></app-form-template>`,
  imports:[formTemplateComponent,tableTemplateComponent],
  styleUrls: []
})

export class SampleComponent {
  @Input() inputData: any;

  public form
  
  constructor() {
    this.form = "employee"
  }
}
