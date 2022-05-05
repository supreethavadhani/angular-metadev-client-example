import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@Component({
  selector: 'ct-badges',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class CtBadgesComponent implements OnInit {
  @Input() badges: any;
  @Input() allSelected: boolean = false;
  @Input() disabled: boolean = false;
  @Output() selectionChange = new EventEmitter<any>();
  selectedVal: Array<String> = [];
  options:any[] = [];
  checkForm: any;
  
  @Output() selected: Array<any>  = [];
  @Output() valueEmitter = new EventEmitter<any> ();


  constructor() {
  }


  ngOnInit() {
  }
  
  toggle(k){
    this.badges[k].value = !this.badges[k].value;
    this.selectionChange.next(this.badges);
  }

}