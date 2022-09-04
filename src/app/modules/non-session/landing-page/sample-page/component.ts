import { Component, Input, OnInit } from '@angular/core';
import { Form, FormData, ServiceAgent } from 'mv-core';
import { CustomerFd, CustomerForm } from 'src/app/framework-modules/formdata/gen/customerForm';
import { NonSessionComponent } from '../../component';
import { DynamicPanel, GroupPanel } from '../../interfaces';

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
  public constructor( sa:ServiceAgent) {
    this.form = new CustomerForm(); 
    this.fd = new CustomerFd(this.form, sa);
  }
}