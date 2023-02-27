import {
    Component, Input,
  } from '@angular/core';
import { FormData, MVClientCoreAppModule, MVComponentsModule } from 'mv-core';
  
  @Component({
    standalone: true,
    selector: 'app-template-one',
    templateUrl: './component.html',
    imports:[MVClientCoreAppModule,MVComponentsModule],
    exportAs:"TemplateOneComponent",
    styleUrls: []
  })
  
  export class TemplateOneComponent {
    @Input() fd: FormData;
    constructor(){
    }

    saveForm(){
      this.fd.saveAsNew().subscribe(
        data=>{
          console.log("saved")
        },
        err=>{
          console.log(err)
        }
      )
    }
    }