import {
  Component,
  Input
} from '@angular/core';

import { formTemplateComponent } from 'src/app/framework-modules/formdata/template/formTemplate/component';

@Component({
  standalone: true,
  selector:'app-customer-entry',
  template: `<app-form-template [formName]= "form"></app-form-template>`,
  imports:[formTemplateComponent],
  styleUrls: []
})

export class customerEntryComponent {
  @Input() inputData: any;

  public form
  
  constructor() {
    this.form = "customer"
  }
}
