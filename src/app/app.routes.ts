
import { customerEntryComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/customerEntry-component";
import { customerListComponent } from "/Users/supreethavadhani/workspace/metadev-client-example/src/app/pages/customerList-component";import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";


const routes: Routes = [
    { path: 'customerList', component: customerListComponent},
    { path: 'customerEntry', component: customerEntryComponent},
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRouting { }