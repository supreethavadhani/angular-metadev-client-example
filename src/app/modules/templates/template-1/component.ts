import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  FormData,
  MVClientCoreAppModule,
  MVComponentsModule,
  ServiceAgent
} from 'mv-core';
import {
  ConstantsService
} from 'src/app/services/constantsService';

@Component({
  standalone: true,
  selector: 'app-template-one',
  templateUrl: './component.html',
  imports: [MVClientCoreAppModule, MVComponentsModule],
  exportAs: "TemplateOneComponent"
})

export class TemplateOneComponent implements OnInit {
  @Input() formName: any;
  public fd1: FormData
  constructor(public sa: ServiceAgent) {}
  ngOnInit() {
    this.fd1 = ConstantsService.getFormFd(this.formName, this.sa)
  }
  saveForm() {
    this.fd1.saveAsNew().subscribe(
      data => {
        console.log("saved")
      },
      err => {
        console.log(err)
      }
    )
  }
}