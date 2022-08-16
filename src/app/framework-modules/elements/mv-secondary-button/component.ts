import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-mv-secondary-button',
  templateUrl: "./component.html",
  styleUrls: []
})


export class MvSecondaryButtonComponent {
  @Input() name: string;
  @Input() tooltip: string;
  @Input() isDisabled: boolean = false;
}