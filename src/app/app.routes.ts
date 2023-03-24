
import { vendorListComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/vendorList-component";
import { orderListComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/orderList-component";
import { customerEntryComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/customerEntry-component";
import { orderEntryComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/orderEntry-component";
import { vendorEntryComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/vendorEntry-component";
import { vendorEditComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/vendorEdit-component";
import { customerListComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/customerList-component";
import { orderEditComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/orderEdit-component";import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";


const routes: Routes = [
    { path: 'orderEdit', component: orderEditComponent},
    { path: 'customerList', component: customerListComponent},
    { path: 'vendorEdit', component: vendorEditComponent},
    { path: 'vendorEntry', component: vendorEntryComponent},
    { path: 'orderEntry', component: orderEntryComponent},
    { path: 'customerEntry', component: customerEntryComponent},
    { path: 'orderList', component: orderListComponent},
    { path: 'vendorList', component: vendorListComponent},
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRouting { }