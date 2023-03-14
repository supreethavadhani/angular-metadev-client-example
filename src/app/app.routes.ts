import { RouterModule, Routes } from "@angular/router";
import { customerEntryComponent } from "./pages/customerEntry-component";
import { NgModule } from "@angular/core";
import { empolyeeViewComponent } from "./pages/employeeView-component";
import { customerViewComponent } from "./pages/customerView-component";
import { empolyeeEntryComponent } from "./pages/employeeEntry-component";
import { studentEntryComponent } from "./pages/studentEntry-component";
import { studentViewComponent } from "./pages/studentView-component";

const routes: Routes = [
    {path: 'employee-view', component: empolyeeViewComponent},
    {path: 'customer-view', component: customerViewComponent},
    {path: 'employee-add', component: empolyeeEntryComponent},
    {path: 'customer-add', component: customerEntryComponent},
    {path: 'student-add', component: studentEntryComponent},
    {path: 'student-view', component: studentViewComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRouting { }
  