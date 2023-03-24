import {
  Component,
  Input,
OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditTemplateComponent } from 'src/app/framework-modules/formdata/template/EditTemplate/component';

@Component({
  standalone: true,
  selector:'app-vendor-edit',
  template: `<app-edit-template [formName]= "form"     [routes]=routes [inputData]=inputData></app-edit-template>`,
  imports:[EditTemplateComponent],
  styleUrls: []
})

export class vendorEditComponent implements OnInit{
  @Input() inputData: any;

  public form;
    public routes;  
  constructor(private route:ActivatedRoute) {
    this.form = "vendors";
    this.routes = [    {
      "name":"Save",
      "routeTo":"vendorList"
    },    {
      "name":"Cancel",
      "routeTo":"vendorList"
    },
    ]
  }

  ngOnInit(): void {
      this.route.params.subscribe(
        params=>{
          console.log(params)
          this.inputData = params
        }
      )
  }}
