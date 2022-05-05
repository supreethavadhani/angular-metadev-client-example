import { Component, Input} from '@angular/core';
import { Vo } from '../../formdata/form/types';

@Component({
	selector: 'ct-selectable-chips-1',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})

export class CTSelectableChipsComponent1 {
	@Input() public chips: Vo[] = [];
	/**
	 * chip object has this attribute as a boolean that implies whether the chips is selected
	 */
	@Input() public selectAttr: string;
	/**
	 * ttribute of chip to be used for displaying
	 */
	@Input() public nameAttr: string;

	/**
	 * toggle slecto status of this chip
	 * @param k index of the chip to be toggled
	 */
	public toggle(k: number): void {
		this.chips[k][this.selectAttr] = !this.chips[k][this.selectAttr];
	}
	/**
	 * is this chip selected?
	 * @param k index of the chip to be toggled
	 */
	public isSelected(k: number): boolean {
		return (this.chips[k][this.selectAttr] as boolean);
	}

	public getName(chip:any){
		return chip[this.nameAttr];
	}
}

