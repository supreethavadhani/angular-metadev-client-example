import { RouterModule, Routes } from "@angular/router";
import { SampleComponent } from "./pages/sample-component";
import { customerEntryComponent } from "./pages/customerEntry-component";
import { ModuleWithProviders, NgModule } from "@angular/core";

const routes: Routes = [
    {path: 'employee', component: SampleComponent},
    {path: 'customer', component: customerEntryComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRouting { }
  