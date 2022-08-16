import { Component, Input } from '@angular/core';
import { ServiceAgent } from 'src/app/framework-modules/formdata/form/serviceAgent';
import { FormData } from 'src/app/framework-modules/formdata/form/formData';
import { NonSessionComponent } from '../../component';
import { DynamicPanel, GroupPanel } from '../../interfaces';
import { CustomerFd, CustomerForm } from 'src/app/framework-modules/formdata/gen/customerForm';

@Component({
  selector: 'app-login',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})

export class ExampleComponent implements DynamicPanel {
  @Input() inputData: any;
  @Input() parentPanel: GroupPanel;
  @Input() session: NonSessionComponent;

  public form: CustomerForm;
  public fd: CustomerFd;
  public constructor(public sa: ServiceAgent) {
    this.form = CustomerForm.getInstance();
    this.fd = new FormData(this.form, this.sa);
    console.log(this.fd);
  }
}