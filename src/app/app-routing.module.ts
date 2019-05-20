import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShowProductsComponent } from './components/show-products/show-products.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'showProducts',
    component: ShowProductsComponent
  },
  {
    path: 'addProduct',
    component: AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
