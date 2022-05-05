import { MenuService } from 'src/app/services/menuService';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { ClientContext } from '../../formdata/form/clientContext';
import { TableMetaData } from '../ct-table/component';

@Component({
  selector: 'ct-sidenav',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})

export class CtSideNavComponent implements OnInit {
  @Input() items: {};
  @Input() defaultSelected: string;


  public tableData:TableMetaData;



  constructor(private ms: MenuService) {
  }

  ngOnInit() {
    var newItem = [];
    var pScreens = this.ms.getPermittedScreens();
    Object.keys(this.items).forEach(key => {
      if (pScreens.indexOf(this.items[key].pageId) > -1) {
        newItem[key] = this.items[key];
      }
    });
    this.items = newItem;

    var keys = Object.keys(this.items);
    var newItems = new Array<any>(keys.length);
    keys.forEach(element => {
      newItems[this.items[element]["order"]-1] = [this.items[element]["name"],this.items[element]["displayonSidenav"],element];
    });
    var filtered = newItems.filter(function(el){ return el!=undefined});
    this.items = filtered;
  }

  select(moduleName: string) {
    this.defaultSelected = moduleName;
  }
}
