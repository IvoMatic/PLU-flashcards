import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowProductsComponent } from './components/show-products/show-products.component';
import { AddProductComponent } from './components/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ShowProductsComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
