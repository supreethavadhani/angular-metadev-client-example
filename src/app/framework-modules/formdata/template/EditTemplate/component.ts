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
  selector: 'app-edit-template',
  templateUrl: './component.html',
  imports: [MVClientCoreAppModule, MVComponentsModule],
  exportAs: "EditTemplateComponent"
})

export class EditTemplateComponent implements OnInit {
  @Input() formName: any;
@Input() routes?: [];
@Input() inputData:{};

  public fd: FormData;
  public formHeader:string;
  constructor(public sa: ServiceAgent, public router: Router) {}
  ngOnInit() {
    this.fd = FormService.getFormFd(this.formName,this.sa,allForms)
    this.formHeader = this.fd.form.getName().toUpperCase();
    this.fd.setFieldValues(this.inputData);
    this.fd.fetchData().subscribe(
      data=>{
      console.log(data,"Data Fetched successfully")
    },
    err=>{
      console.log(err)
    })  }  
 saveSave() {
    this.fd.save().subscribe(
      data => {
        console.log("saved")
        this.router.navigate([this.routes.filter(routeTo=> routeTo['name'] == "Save" )[0]['routeTo']])
    },       err => {
        console.log(err)
      });   
    }   
 navigateCancel() {
    this.fd = FormService.getFormFd(this.formName,this.sa,allForms)  
        this.router.navigate([this.routes.filter(routeTo=> routeTo['name'] == "Cancel" )[0]['routeTo']])  }
}