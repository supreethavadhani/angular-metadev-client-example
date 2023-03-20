
import { orderViewComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/orderView-component";
import { customerEntryComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/customerEntry-component";
import { orderEntryComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/orderEntry-component";
import { returnsViewComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/returnsView-component";
import { employeeEntryComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/employeeEntry-component";
import { employeeViewComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/employeeView-component";
import { shipmentViewComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/shipmentView-component";
import { customerViewComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/customerView-component";import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";


const routes: Routes = [
    { path: 'customerView', component: customerViewComponent},
    { path: 'shipmentView', component: shipmentViewComponent},
    { path: 'employeeView', component: employeeViewComponent},
    { path: 'employeeEntry', component: employeeEntryComponent},
    { path: 'returnsView', component: returnsViewComponent},
    { path: 'orderEntry', component: orderEntryComponent},
    { path: 'customerEntry', component: customerEntryComponent},
    { path: 'orderView', component: orderViewComponent},
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRouting { }