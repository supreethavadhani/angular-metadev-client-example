import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonSessionComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: NonSessionComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
