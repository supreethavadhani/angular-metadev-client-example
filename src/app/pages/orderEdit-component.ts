import {
  Component,
  Input,
OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditTemplateComponent } from 'src/app/framework-modules/formdata/template/EditTemplate/component';

@Component({
  standalone: true,
  selector:'app-order-edit',
  template: `<app-edit-template [formName]= "form"     [routes]=routes [inputData]=inputData></app-edit-template>`,
  imports:[EditTemplateComponent],
  styleUrls: []
})

export class orderEditComponent implements OnInit{
  @Input() inputData: any;

  public form;
    public routes;  
  constructor(private route:ActivatedRoute) {
    this.form = "orders";
    this.routes = [    {
      "name":"Save",
      "routeTo":"orderList"
    },    {
      "name":"Cancel",
      "routeTo":"orderList"
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
