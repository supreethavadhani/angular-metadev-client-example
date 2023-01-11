import {
    Component, Input,
  } from '@angular/core';
import { FormData } from 'mv-core';

  
  @Component({
    selector: 'app-template-one',
    templateUrl: './component.html',
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