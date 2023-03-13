import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(public sa: ServiceAgent, public router: Router) {}
  ngOnInit() {
    this.fd = FormService.getFormFd(this.formName,this.sa,allForms)
    this.formHeader = this.fd.form.getName();
  } 
 create() {
    this.fd.saveAsNew().subscribe(
      data => {
        console.log(data)
        console.log(this.fd.extractKeyFields())
        // this.router.navigate(['customer',this.fd.extractKeyFields()])
      },
      err => {
        console.log(err)
      }
    )
  }    
  async cancel() {
  }
}