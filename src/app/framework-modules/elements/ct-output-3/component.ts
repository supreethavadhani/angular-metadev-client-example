import { Component, Input} from '@angular/core';



@Component({
	selector: 'ct-output-3',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CTOutput3Component {
	@Input() public label: string;
	@Input() public value: string;
}

