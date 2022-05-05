import { Component, Input, ViewChild } from '@angular/core';
import { ServiceAgent } from 'src/app/framework-modules/formdata/form/serviceAgent';
import { FormData } from 'src/app/framework-modules/formdata/form/formData';
import { RouterService } from 'src/app/services/routerService';
import { NonSessionComponent } from '../../component';
import { DynamicPanel, GroupPanel } from '../../interfaces';
import { CtSpinner } from 'src/app/framework-modules/elements/ct-spinner/component';
import { MessageService } from 'src/app/services/messageService';
import { ClientContext } from 'src/app/framework-modules/formdata/form/clientContext';
import { CustomerFd, CustomerForm } from 'src/app/framework-modules/formdata/gen/customerForm';


@Component({
  selector: 'login',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class ExampleComponent implements DynamicPanel {
  @ViewChild("CtSpinner") public CtSpinner: CtSpinner;
  @Input() inputData: any;
  @Input() parentPanel: GroupPanel;
  @Input() session: NonSessionComponent;

  public form: CustomerForm;
  public fd: CustomerFd;
  public constructor(public sa: ServiceAgent,
    public routerService: RouterService,
    private ms: MessageService,
    private clientContext: ClientContext) {
    this.form = CustomerForm.getInstance();
    this.fd = new FormData(this.form, this.sa);
  }
  /**
   * Login Function
   */
  save() {
    this.fd.saveAsNew().subscribe(
      data => {
        this.ms.showSuccess("Data Saved successfully");
        this.form = CustomerForm.getInstance();
        this.fd = new FormData(this.form, this.sa);
      },
      err => {
        this.CtSpinner.hide();
      }
    );
  }
update(){
  // this.fd.setFieldValue("customerId",1);
  this.fd.save().subscribe
}


  /**
   * open forgot password page
   */
}
