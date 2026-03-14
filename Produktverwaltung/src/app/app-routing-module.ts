import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import {Produkts} from './produkts/produkts';

const routes: Routes = [
  {path: "home", component: Home},
  {path:"produkts",component: Produkts}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
