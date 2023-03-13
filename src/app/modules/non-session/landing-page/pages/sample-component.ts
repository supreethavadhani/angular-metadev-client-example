import {
  Component,
  Input
} from '@angular/core';
import {
  NonSessionComponent
} from '../../component';
import {
  DynamicPanel,
  GroupPanel
} from '../../interfaces';
import { formTemplateComponent } from 'src/app/framework-modules/formdata/template/formTemplate/component';
import { tableTemplateComponent } from 'src/app/framework-modules/formdata/template/tableTemplate/component';

@Component({
  standalone: true,
  selector:'app-landing',
  template: `<app-form-template [formName]= "form"></app-form-template>`,
  imports:[formTemplateComponent,tableTemplateComponent],
  styleUrls: []
})

export class SampleComponent implements DynamicPanel {
  @Input() inputData: any;
  @Input() parentPanel: GroupPanel;
  @Input() session: NonSessionComponent;
  public form
  constructor() {
    this.form = "employee"
  }
}
