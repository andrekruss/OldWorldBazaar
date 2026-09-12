import { Component } from '@angular/core';
import { FormSection } from '../../../../shared/components/forms/form-section/form-section';
import { FormField } from "../../../../shared/components/forms/form-field/form-field";
import { Input } from '../../../../shared/components/inputs/input/input';
import { Button } from "../../../../shared/components/button/button";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-customer-form',
  imports: [
    FormSection,
    FormField,
    Input,
    Button,
    ReactiveFormsModule
  ],
  templateUrl: './register-customer-form.html',
  styleUrl: './register-customer-form.css',
})
export class RegisterCustomerForm {

  protected form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),

    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),

    street: new FormControl(''),
    district: new FormControl(''),
    number: new FormControl(''),
    complement: new FormControl(''),
    reference: new FormControl(''),
    zipCode: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl('')
  });

  protected onRegister() : void {
    console.log(this.form.value);
  }
}
