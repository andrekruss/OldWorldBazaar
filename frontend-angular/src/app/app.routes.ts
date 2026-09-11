import { ChooseAccountTypePage } from './features/onboarding/pages/choose-account-type-page/choose-account-type-page';
import { LoginPage } from './features/auth/pages/login-page/login-page';
import { Routes } from '@angular/router';
import { RegisterCustomerPage } from './features/onboarding/pages/register-customer-page/register-customer-page';
import { RegisterSellerPage } from './features/onboarding/pages/register-seller-page/register-seller-page';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'register',
    component: ChooseAccountTypePage
  },
  {
    path: 'register/customer',
    component: RegisterCustomerPage
  },
  {
    path: 'register/seller',
    component: RegisterSellerPage
  }
];
