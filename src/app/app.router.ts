import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConstantsService } from './services/constantsService';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: ConstantsService.ROUTE_NON_SESSION, loadChildren: () => import('./modules/non-session/module').then(m => m.NonSessionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting { }
