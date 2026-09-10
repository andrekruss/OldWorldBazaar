import { ChooseAccountTypePage } from './features/onboarding/pages/choose-account-type-page/choose-account-type-page';
import { LoginPage } from './features/auth/pages/login-page/login-page';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'register',
    component: ChooseAccountTypePage
  },
];
