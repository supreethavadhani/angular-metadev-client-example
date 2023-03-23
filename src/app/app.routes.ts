
import { orderListComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/orderList-component";
import { customerEntryComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/customerEntry-component";
import { orderEntryComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/orderEntry-component";
import { customerListComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/customerList-component";
import { orderEditComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/orderEdit-component";import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";


const routes: Routes = [
    { path: 'orderEdit', component: orderEditComponent},
    { path: 'customerList', component: customerListComponent},
    { path: 'orderEntry', component: orderEntryComponent},
    { path: 'customerEntry', component: customerEntryComponent},
    { path: 'orderList', component: orderListComponent},
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRouting { }