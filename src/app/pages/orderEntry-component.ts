import {
  Component,
  Input,
OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntryPageComponent } from 'src/app/framework-modules/formdata/template/EntryPage/component';

@Component({
  standalone: true,
  selector:'app-order-entry',
  template: `<app-entry-page [formName]= "form"     [routes]=routes></app-entry-page>`,
  imports:[EntryPageComponent],
  styleUrls: []
})

export class orderEntryComponent implements OnInit{
  @Input() inputData: any;

  public form;
    public routes;  
  constructor(private route:ActivatedRoute) {
    this.form = "orders";
    this.routes = [    {
      "name":"Save Record",
      "routeTo":"orderList"
    },    {
      "name":"Navigate Back",
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
