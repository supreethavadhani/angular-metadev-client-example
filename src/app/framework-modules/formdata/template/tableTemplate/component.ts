import {
  AfterViewInit,
    Component, Input, OnInit, ViewChild,
  } from '@angular/core';
import { Router } from '@angular/router';
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
  
  export class tableTemplateComponent implements OnInit{
    @ViewChild("gridTable", { static: false }) gtable: MvTableComponent;
    @Input() formName: any;


  @Input() routes?: [];
@Input() editRoute: string
public fd: FormData
    public tableData: TableMetaData;
public formHeader: string

    constructor(public sa: ServiceAgent, public router: Router) {}
    
    async ngOnInit() {
      this.fd = await FormService.getFormFd(this.formName,this.sa,allForms)
      this.fetchData();
     this.formHeader = this.fd.form.getName().toUpperCase();
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
 navigateaddnewrecord() {
    this.fd = FormService.getFormFd(this.formName,this.sa,allForms)  
        this.router.navigate([this.routes.filter(routeTo=> routeTo['name'] == "add new record" )[0]['routeTo']])  }  
editClicked($event) {
    let primaryKey = Object.keys(this.fd.extractKeyFields())[0]
    let routeKey = {}
    routeKey[primaryKey] = this.tableData.data[$event][primaryKey]
    this.router.navigate([this.editRoute,routeKey])
  }
}