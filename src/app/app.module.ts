import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularTokenModule } from 'angular-token';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './services/products.service';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    ProductsComponent,
    ProductsDetailComponent,
    ProductsCreateComponent,
    ProductsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularTokenModule.forRoot({
      apiBase: 'https://perriappbackend.herokuapp.com', // TODO: move to env
      signInRedirect: 'sign-in' // TODO: move to env
    })
  ],
  providers: [
    AngularTokenModule,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
