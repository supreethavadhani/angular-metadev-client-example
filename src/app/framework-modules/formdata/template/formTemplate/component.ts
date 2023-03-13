import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  FormData,
  MVClientCoreAppModule,
  MVComponentsModule,
  ServiceAgent,
  FormService
} from 'mv-core';
import { allForms } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/framework-modules/formdata/gen/allForms"

@Component({
  standalone: true,
  selector: 'app-form-template',
  templateUrl: './component.html',
  imports: [MVClientCoreAppModule, MVComponentsModule],
  exportAs: "formTemplateComponent"
})

export class formTemplateComponent implements OnInit {
  @Input() formName: any;
  public fd: FormData;
  public formHeader:string;
  constructor(public sa: ServiceAgent) {}
  ngOnInit() {
    this.fd = FormService.getFormFd(this.formName,this.sa,allForms)
    this.formHeader = this.fd.form.getName();
  } 
 create() {
    this.fd.saveAsNew().subscribe(
      data => {
        console.log("saved")
      },
      err => {
        console.log(err)
      }
    )
  }    
 cancel() {
    this.fd = FormService.getFormFd(this.formName,this.sa,allForms)  
  }
}