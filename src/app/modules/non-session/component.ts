import { Component } from '@angular/core';
import { SampleComponent } from '../../pages/sample-component';
import { customerEntryComponent } from 'src/app/pages/customerEntry-component';
 
/**
 * temp during development. will come from menuService
 */

@Component({
  standalone: true,
  selector: 'app-non-session',
  templateUrl: './component.html',
  styleUrls: [],
  imports:[SampleComponent, customerEntryComponent]
})

export class NonSessionComponent  {
 
}
