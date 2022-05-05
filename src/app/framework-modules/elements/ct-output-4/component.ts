import { Component, Input} from '@angular/core';



@Component({
	selector: 'ct-output-4',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CTOutput4Component {
	@Input() public label: string;
	@Input() public value: string;
}

