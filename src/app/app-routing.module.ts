import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchProductComponent} from "./search-product/search-product.component";

const routes: Routes = [
  { path: 'search', component: SearchProductComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
