import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-mv-primary-button',
  templateUrl: "./component.html",
  styleUrls: []
})

export class MvPrimaryButtonComponent {
  @Input() name: string;
  @Input() tooltip: string;
  @Input() isDisabled: boolean = false;
}