import { Component, Input} from '@angular/core';

@Component({
  selector: 'ct-danger-button',
  templateUrl: "./component.html",
  styleUrls: ['./component.scss']
})


export class CtDangerButtonComponent {
  @Input() name:string;
  @Input() tooltip:string;
  @Input() isDisabled:boolean=false;
  @Input() login:boolean=false;
  constructor() {}
}
