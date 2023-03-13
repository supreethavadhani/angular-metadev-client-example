import {
  AfterViewInit,
    Component, Input, OnInit, ViewChild,
  } from '@angular/core';
import { 
    FilterRequest, FormData, MvTableComponent, ServiceAgent, TableMetaData, MVClientCoreAppModule, MVComponentsModule, FormService 
  } from 'mv-core';
import { allForms } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/framework-modules/formdata/gen/allForms";
  @Component({
    standalone: true,
    selector: 'app-table-template',
    templateUrl: './component.html',
    imports:[MVClientCoreAppModule,MVComponentsModule],
    exportAs:"tableTemplateComponent",
    styleUrls: []
  })
  
  export class tableTemplateComponent implements AfterViewInit{
    @ViewChild("gridTable", { static: false }) gtable: MvTableComponent;
    @Input() formName: any;

    public fd: FormData
    public tableData: TableMetaData;
public formHeader: string

    constructor(public sa: ServiceAgent) {}
    
    ngAfterViewInit(): void {
      this.fd = FormService.getFormFd(this.formName,this.sa,allForms)
      this.fetchData();
     this.formHeader = this.fd.form.getName();
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