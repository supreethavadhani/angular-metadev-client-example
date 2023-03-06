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
import { TemplateOneComponent } from 'src/app/modules/templates/template-1/component';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './component.html',
  imports:[TemplateOneComponent],
  styleUrls: []
})

export class ExampleComponent implements DynamicPanel {
  @Input() inputData: any;
  @Input() parentPanel: GroupPanel;
  @Input() session: NonSessionComponent;
  public form
  constructor() {
    this.form = "customerForm"
  }
}