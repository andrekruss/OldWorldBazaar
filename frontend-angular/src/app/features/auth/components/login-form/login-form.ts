import { Component } from '@angular/core';
import { Button } from "../../../../shared/components/button/button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [
    Button,
    RouterLink
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  protected signInBtnText: string = "Sign In";
}
