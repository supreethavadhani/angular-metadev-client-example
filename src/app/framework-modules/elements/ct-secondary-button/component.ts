import { Component, Input} from '@angular/core';

@Component({
  selector: 'ct-secondary-button',
  templateUrl: "./component.html",
  styleUrls: ['./component.scss']
})


export class CTSecondaryyButtonComponent {
  @Input() name:string;
  @Input() tooltip:string;
  @Input() isDisabled:boolean=false;
  @Input() login:boolean=false;
  constructor() {}
}
