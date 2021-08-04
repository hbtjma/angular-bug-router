import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FunComponent} from './fun/fun.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'de/fun',
    component: FunComponent,
  },
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
