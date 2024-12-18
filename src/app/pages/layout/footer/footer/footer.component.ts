import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {


  constructor(private router:Router){}
  notifyByEmail()
  {

  }
  NivigateUs() {
    console.log('Navigating to contact page...');
    this.router.navigateByUrl('/Contact').then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
    });
  }
  NivigateaboutUs()
  {
    console.log('Navigating to contact page...');
    this.router.navigateByUrl('/Abouts').then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
    });
  }
  
  NavigatePrivacyPolicy() {
    console.log('Navigating to contact page...');
    this.router.navigateByUrl('/Pravicy-Policy').then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
    });
  }
  navigateTermsAndConditions()
  {
    console.log('Navigating to contact page...');
    this.router.navigateByUrl('/Tearms-Conditions').then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
    });
  }
  navigateReturnPolicy()
  {
    console.log('Navigating to contact page...');
    this.router.navigateByUrl('/Returns-policy').then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
    });
  }
  navigateFAQHElp()
  {
    console.log('Navigating to contact page...');
    this.router.navigateByUrl('/FAQ-Help').then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
    });
  }
  NavigateTocart()
  {
    console.log('Navigating to contact page...');
    this.router.navigateByUrl('/cart').then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
    });
  }
}
