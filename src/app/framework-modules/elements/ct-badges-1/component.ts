import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@Component({
  selector: 'ct-badges-1',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class CtBadges1Component implements OnInit {
  @Input() badges: any;
  @Input() allSelected: boolean = false;
  @Input() disabled: boolean = false;
  selectedVal: Array<String> = [];
  public options: Array<{name:any, value: boolean, key: any}> = [];
  checkForm: any;
  
  @Output() select: Array<any>  = [];
  @Output() selected = new EventEmitter<any> ();
  @Output() valueEmitter = new EventEmitter<any> ();


  constructor() {
  }


  ngOnInit() {
    
    if(this.badges == undefined){
      this.options = [];
      this.selectedVal = []
    }
    else{
      
      this.formInitialData();
    }
  }

  formInitialData(){
    this.options = [];
    this.selectedVal = [];
    if(typeof(this.badges[0]) == typeof({})){
      if(this.allSelected == true){
        this.badges.forEach(element => {
          this.options.push({name:element.name, key: element.key, value: true});
          this.selectedVal.push(String(element.name));
        });
      }
      else{
        this.badges.forEach(element => {
          this.options.push({name:element.name, key: element.key, value: element.value});
        });
      }
    }
    else{
      if(this.allSelected == true){
        this.badges.forEach(element => {
          this.options.push({name:element, key: element, value: true});
          this.selectedVal.push(String(element));
        });
      }
      else{
        this.badges.forEach(element => {
          this.options.push({name:element, key: element, value: false});
        });
      }
    }
  }

  formData(){
    this.options.forEach(element => {
      
    });
  }

  

  private setSelectedValue(){
    if(typeof this.options != "undefined"){
      this.options.forEach( res=> {
        if(res.value) {
          this.selectedVal.push(String(res.key))
        }   
      })
    }
  }


  public onValChange(val) {
    if (val.length == 0 ){
      for( var i = 0 ; i < this.options.length ; i ++){
        this.options[i].value = false
      }
      this.selected.emit(this.options);
    }else {
      this.select = val
      this.setValues()
    }
  }

  setValues(){
    for( var i = 0 ; i < this.options.length ; i ++){
      if( this.select.indexOf(String(this.options[i].key))  != -1 )
      {
        this.options[i].value = true
      }else {
        this.options[i].value = false
      }
    }
    this.selected.emit(this.options);
  }
}