import {
  Component,
  Input,
OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tableTemplateComponent } from 'src/app/framework-modules/formdata/template/tableTemplate/component';

@Component({
  standalone: true,
  selector:'app-order-list',
  template: `<app-table-template [formName]= "form" editRoute = "orderEdit"    [routes]=routes></app-table-template>`,
  imports:[tableTemplateComponent],
  styleUrls: []
})

export class orderListComponent implements OnInit{
  @Input() inputData: any;

  public form;
    public routes;  
  constructor(private route:ActivatedRoute) {
    this.form = "orders";
    this.routes = [    {
      "name":"add new record",
      "routeTo":"orderEntry"
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
