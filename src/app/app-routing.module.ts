import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularTokenService } from 'angular-token';

import { SignInComponent } from './sign-in/sign-in.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';

const routes: Routes = [
	{ path: '', redirectTo: '/products', pathMatch: 'full' },
	{ path: 'sign-in', component: SignInComponent },
  { path: 'products', component: ProductsComponent, canActivate: [AngularTokenService] },
  { path: 'products/:productId', component: ProductsDetailComponent, canActivate: [AngularTokenService] },
  { path: 'products-create', component: ProductsCreateComponent, canActivate: [AngularTokenService] },
  { path: 'products-edit/:productId', component: ProductsEditComponent, canActivate: [AngularTokenService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
