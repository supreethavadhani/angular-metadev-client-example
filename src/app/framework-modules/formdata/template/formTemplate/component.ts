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

export class FormTemplateComponent implements OnInit {
  @Input() formName: any;
@Input() routes?: [];
  public fd: FormData;
  public formHeader:string;
  constructor(public sa: ServiceAgent, public router: Router) {}
  ngOnInit() {
    this.fd = FormService.getFormFd(this.formName,this.sa,allForms)
    this.formHeader = this.fd.form.getName().toUpperCase();
  } 
 createSave() {
    this.fd.saveAsNew().subscribe(
      data => {
        console.log("saved")
        this.router.navigate([this.routes.filter(routeTo=> routeTo['name'] == "Save" )[0]['routeTo']])
    },       err => {
        console.log(err)
      });   
    }   
 navigateNavigate() {
    this.fd = FormService.getFormFd(this.formName,this.sa,allForms)  
        this.router.navigate([this.routes.filter(routeTo=> routeTo['name'] == "Navigate" )[0]['routeTo']])  }
}