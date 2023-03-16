
import { employeeAndCustomerViewComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/employeeAndCustomerView-component";
import { studentViewComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/studentView-component";
import { customerEntryComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/customerEntry-component";
import { studentEntryComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/studentEntry-component";
import { employeeEntryComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/employeeEntry-component";
import { employeeViewComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/employeeView-component";
import { customerViewComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/customerView-component";import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";


const routes: Routes = [
    { path: 'customerView', component: customerViewComponent},
    { path: 'employeeView', component: employeeViewComponent},
    { path: 'employeeEntry', component: employeeEntryComponent},
    { path: 'studentEntry', component: studentEntryComponent},
    { path: 'customerEntry', component: customerEntryComponent},
    { path: 'studentView', component: studentViewComponent},
    { path: 'employeeAndCustomerView', component: employeeAndCustomerViewComponent},
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRouting { }