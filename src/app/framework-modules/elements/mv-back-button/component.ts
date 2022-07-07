import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-mv-back-button',
  templateUrl: "./component.html",
  styleUrls: ['./component.scss']
})


export class MvBackButtonComponent {
  @Input() name: string;
  @Input() tooltip: string;
  @Input() isDisabled: boolean = false;
  constructor() {}
}