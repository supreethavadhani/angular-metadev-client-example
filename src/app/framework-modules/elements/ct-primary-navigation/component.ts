import { MenuService } from 'src/app/services/menuService';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ClientContext } from '../../formdata/form/clientContext';

@Component({
  selector: 'ct-primary-navigation',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class CTPrimaryNavigationComponent {
  @Input() defaultSelected: string;
  @Input() tiles: Array<any>;
  modules: Array<any> = [];
  numberOfModules: number = 0;
  selected: string;
  @Output() public navigate = new EventEmitter<any>();

  constructor(private ms: MenuService) { }

  ngOnInit() {
    this.formDisplayArray();

    this.numberOfModules = this.modules.length;
    this.selected = this.defaultSelected;
  }

  formDisplayArray() {
    var displayArr = [];
    var pScreens = this.ms.getPermittedScreens();
    Object.keys(this.tiles).forEach(key => {
      if (pScreens.indexOf(this.tiles[key].pageId) > -1) {
        displayArr.push(this.tiles[key].displayName);
      }
    })
    this.formTiles(displayArr);
  }

  formTiles(array: Array<any>) {
    array.forEach(element => {
      this.modules.push(
        { 'moduleIconUnselected': '../../../../assets/images/' + element + '_unselected.svg', 'moduleIconSelected': '../../../../assets/images/' + element + '_selected.svg', 'moduleName': element }
      )
    });
  }

  /**
   * Function to navigate to selected Module
   * @param moduleName: name of module seleted
   */
  navigationEmitter(moduleName) {
    this.selected = moduleName;
    this.navigate.next(moduleName);
  }

}
