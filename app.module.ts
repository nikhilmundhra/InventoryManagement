import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/productList.component';
import { ProductTypeComponent } from './productType/productType.component';
import { VendorComponent } from './vendor/vendor.component';
import { PageNotFoundComponent } from './Others/pageNotFound.component';
import { HomeComponent } from './Others/Home.component';

import { ProductService } from './product/product.service';
import { AddProductComponent } from './product/addProduct.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'productType/:id', component: ProductTypeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'vendor/:id', component: VendorComponent },
    { path: "product/add", component: AddProductComponent },
    { path: "product/edit/:id", component: AddProductComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    declarations: [
        AppComponent, ProductComponent, ProductListComponent, ProductTypeComponent, PageNotFoundComponent, HomeComponent, VendorComponent, AddProductComponent
  ],
    imports: [
        BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes, { useHash: true }), ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
