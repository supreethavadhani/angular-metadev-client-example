import { Component, Input} from '@angular/core';

@Component({
  selector: 'ct-back-button',
  templateUrl: "./component.html",
  styleUrls: ['./component.scss']
})


export class CtBackButtonComponent {
  @Input() name:string;
  @Input() tooltip:string;
  @Input() isDisabled:boolean=false;
  constructor() {}
}
