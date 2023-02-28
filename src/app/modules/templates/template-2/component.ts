import {
    Component, Input, OnInit, ViewChild,
  } from '@angular/core';
import { 
    FilterRequest, FormData, MvTableComponent, ServiceAgent, TableMetaData, MVClientCoreAppModule, MVComponentsModule 
  } from 'mv-core';

  @Component({
    standalone: true,
    selector: 'app-template-two',
    templateUrl: './component.html',
    imports:[MVClientCoreAppModule,MVComponentsModule],
    styleUrls: []
  })
  
  export class TemplateTwoComponent{
    @ViewChild("gridTable", { static: false }) gtable: MvTableComponent;
    @Input() fd: FormData;
  
    public tableData: TableMetaData;
    public constructor(sa: ServiceAgent) {
    // for future constructor operations
    }

    
    fetchData() {
  
      this.tableData = this.gtable.getColumnData(this.fd)
      const filter: FilterRequest = {
        conditions: {}
      };
      
     this.fd.filter(filter).subscribe({
      next: data =>{
          this.tableData.data = data;
          this.gtable.update();
      },
      error: msg => console.error("Error from server ", msg)
     });
    }
  }
