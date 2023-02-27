import {
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  FilterRequest,
  MVClientCoreAppModule,
  MVComponentsModule,
  MvTableComponent,
  ServiceAgent,
  TableMetaData
} from 'mv-core';
import {
  CustomerFd,
  CustomerForm
} from 'src/app/framework-modules/formdata/gen/customerForm';
import {
  NonSessionComponent
} from '../../component';
import {
  DynamicPanel,
  GroupPanel
} from '../../interfaces';
import { data } from 'jquery';
import { TemplateOneComponent } from 'src/app/modules/templates/template-1/component';
import { TemplateTwoComponent } from 'src/app/modules/templates/template-2/component';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './component.html',
  imports:[TemplateOneComponent,MVClientCoreAppModule,MVComponentsModule,TemplateTwoComponent],
  styleUrls: []
})

export class ExampleComponent implements DynamicPanel,OnInit {
  @ViewChild("gridTable", { static: false }) gtable: MvTableComponent;
  @Input() inputData: any;
  @Input() parentPanel: GroupPanel;
  @Input() session: NonSessionComponent;

  public form: CustomerForm;
  public fd: CustomerFd;
  public tableData: TableMetaData;
  public constructor(sa: ServiceAgent) {
    this.form = new CustomerForm();
    this.fd = new CustomerFd(this.form, sa);
  }

  ngOnInit() {
    this.metaDataInit();
  }

  metaDataInit() {
    this.tableData = {
      data: [],
      metaData: {
        column_names: [
          "name",
          "addressLine1",
          "phone"
        ],
        display_names: {
          "name": "Customer Name",
          "addressLine1": "Address Line 1",
          "phone":"Phone Number"
        },

      },
    };
  }


  fetchData() {


    const filter: FilterRequest = {
      conditions: {},
      sort: {},
      maxRows: 10
    };
    
   this.fd.filter(filter).subscribe({
    next: data =>{
      console.log(data)
        this.tableData.data = data;
        this.gtable.update();
    },
    error: msg => console.error("Error from server ", msg)
   });
  }
}