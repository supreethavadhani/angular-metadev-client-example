import {
  Component,
  Input
} from '@angular/core';

import { tableTemplateComponent } from 'src/app/framework-modules/formdata/template/tableTemplate/component';

@Component({
  standalone: true,
  selector:'app-shipment-view',
  template: `<app-table-template [formName]= "form"></app-table-template>`,
  imports:[tableTemplateComponent],
  styleUrls: []
})

export class shipmentViewComponent {
  @Input() inputData: any;

  public form;
    public routes;  
  constructor() {
    this.form = "shipments";
    }
}
