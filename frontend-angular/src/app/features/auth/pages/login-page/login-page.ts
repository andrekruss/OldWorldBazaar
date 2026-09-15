import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LoginForm } from '../../components/login-form/login-form';

@Component({
  selector: 'app-login-page',
  imports: [LoginForm],
  templateUrl: './login-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './login-page.css',
})
export class LoginPage {}
