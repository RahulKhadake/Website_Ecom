import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/layout/Navbar/navbar/navbar.component';
import { FooterComponent } from './pages/layout/footer/footer/footer.component';
import { LoginComponent } from './pages/components/Login/login/login.component';
import { RegisterComponent } from './pages/components/Register/register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ForgetPasswordComponent } from './pages/components/ForgetPassword/forget-password/forget-password.component';
import { HomeComponent } from './pages/components/Home/home/home.component';
import { ShopComponent } from './pages/components/shop/shop/shop.component';
import { ShopDetailsComponent } from './pages/components/shop-details/shop-details/shop-details.component';
import { CartComponent } from './pages/components/cart/cart/cart.component';
import { CheckoutComponent } from './pages/components/checkout/checkout/checkout.component';
import { ClientSayingComponent } from './pages/components/ClientSaying/client-saying/client-saying.component';
import { PageNotFoundComponent } from './pages/components/PageNotFound/page-not-found/page-not-found.component';
import { ContactComponent } from './pages/components/Contact/contact/contact.component';
import { AboutUsComponent } from './pages/components/Abouts-us/about-us/about-us.component';
import { PrivacyPolicyComponent } from './pages/components/privacy-policy/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    HomeComponent,
    ShopComponent,
    ShopDetailsComponent,
    CartComponent,
    CheckoutComponent,
    ClientSayingComponent,
    PageNotFoundComponent,
    ContactComponent,
    AboutUsComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterLink
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
