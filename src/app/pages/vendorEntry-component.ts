import {
  Component,
  Input,
OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntryPageComponent } from 'src/app/framework-modules/formdata/template/EntryPage/component';

@Component({
  standalone: true,
  selector:'app-vendor-entry',
  template: `<app-entry-page [formName]= "form"     [routes]=routes></app-entry-page>`,
  imports:[EntryPageComponent],
  styleUrls: []
})

export class vendorEntryComponent implements OnInit{
  @Input() inputData: any;

  public form;
    public routes;  
  constructor(private route:ActivatedRoute) {
    this.form = "vendors";
    this.routes = [    {
      "name":"Save Record",
      "routeTo":"vendorList"
    },    {
      "name":"Navigate Back",
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
