import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/components/Login/login/login.component';
import { RegisterComponent } from './pages/components/Register/register/register.component';
import { ForgetPasswordComponent } from './pages/components/ForgetPassword/forget-password/forget-password.component';
import { HomeComponent } from './pages/components/Home/home/home.component';
import { ShopComponent } from './pages/components/shop/shop/shop.component';
import { ShopDetailsComponent } from './pages/components/shop-details/shop-details/shop-details.component';
import { NavbarComponent } from './pages/layout/Navbar/navbar/navbar.component';
import { CartComponent } from './pages/components/cart/cart/cart.component';
import { CheckoutComponent } from './pages/components/checkout/checkout/checkout.component';
import { ClientSayingComponent } from './pages/components/ClientSaying/client-saying/client-saying.component';
import { PageNotFoundComponent } from './pages/components/PageNotFound/page-not-found/page-not-found.component';
import { ContactComponent } from './pages/components/Contact/contact/contact.component';
import { AboutUsComponent } from './pages/components/Abouts-us/about-us/about-us.component';
import { PrivacyPolicyComponent } from './pages/components/privacy-policy/privacy-policy/privacy-policy.component';




const routes: Routes = [
  {
    path:'',redirectTo:'Login',pathMatch:'full'
  },
  {
    path:'Login', component:LoginComponent
  },
  {
    path:'Register', component:RegisterComponent
  },
  {
    path:'ForgetPassword', component:ForgetPasswordComponent
  },
  {
    path:'Home', component:HomeComponent
  },
  {
    path:'Shop', component:ShopComponent
  },
  {
    path:'Shop-details', component:ShopDetailsComponent
  },
  {
    path:'Navbar', component:NavbarComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'checkout', component:CheckoutComponent
  } ,
  {
    path:'ClientSaying', component:ClientSayingComponent
  },
  {
    path:'PageNotFound', component:PageNotFoundComponent
  },
  {
    path:'Contact', component:ContactComponent
  },
  {
    path:'Abouts', component:AboutUsComponent
  },
  {
    path:'Pravicy-Policy', component:PrivacyPolicyComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
