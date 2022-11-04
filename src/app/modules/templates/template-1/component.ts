import {
    Component, Input,
  } from '@angular/core';

  
  @Component({
    selector: 'app-template-one',
    templateUrl: './component.html',
    styleUrls: []
  })
  
  export class TemplateOneComponent {
    @Input() fd: any;
    }