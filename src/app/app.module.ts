import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/headr.component';
import { ProductsComponent } from './products/products.component';
import {ProfileComponent} from './profile/profile.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    CommonModule,
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ShoppingListComponent,
    AuthComponent,
    ProfileComponent,
    CommonComponent,
    
  ],
  imports: [
BrowserModule, FormsModule, HttpClientModule,
RouterModule.forRoot([
  {
    path:'', component:HeaderComponent
  },
  {path:'auth', component: AuthComponent},
  {path:'profile', component: ProfileComponent},
  {path:'products', component: ProductsComponent},
  {path:'shopping-list', component: ShoppingListComponent}

]),
BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }

