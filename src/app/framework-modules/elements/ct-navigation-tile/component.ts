import { Component, OnInit, Input } from '@angular/core';



@Component({
    selector: 'ct-navigation-tile',
    templateUrl: "./component.html",
    styleUrls: ['./component.scss']
})
export class CTNavigationTileComponent implements OnInit{
	@Input() imageSelected: any;
	@Input() imageUnselected: any;
	@Input() name: String;
	@Input() selected: boolean;

	ngOnInit(){
	}
    
}