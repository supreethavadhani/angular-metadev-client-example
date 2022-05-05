import { Component, Input} from '@angular/core';

@Component({
  selector: 'ct-primary-button',
  templateUrl: "./component.html",
  styleUrls: ['./component.scss']
})


export class CTPrimaryButtonComponent {
  @Input() name:string;
  @Input() tooltip:string;
  @Input() isDisabled:boolean=false;
  constructor() {}
}
