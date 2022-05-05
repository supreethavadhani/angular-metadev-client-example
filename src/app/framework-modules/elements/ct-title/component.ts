import { Component, Input} from '@angular/core';



@Component({
	selector: 'ct-title',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CtTitleComponent {
	@Input() public title: string;
	@Input() public subTitle: string;
}

