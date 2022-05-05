import { MenuService } from 'src/app/services/menuService';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { ClientContext } from '../../formdata/form/clientContext';
import { TableMetaData } from '../ct-table/component';

@Component({
  selector: 'ct-sidenav-1',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})

export class CtSideNavOneComponent implements OnInit {
  @Input() items: {};
  @Input() defaultSelected: string;
  @Input() header: string;


  public tableData:TableMetaData;



  constructor(private ms: MenuService) {
  }

  ngOnInit() {
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
