import { Component } from '@angular/core';
import { FormSection } from '../../../../shared/components/forms/form-section/form-section';
import { FormField } from "../../../../shared/components/forms/form-field/form-field";
import { Input } from '../../../../shared/components/inputs/input/input';
import { Button } from "../../../../shared/components/button/button";

@Component({
  selector: 'app-register-customer-form',
  imports: [FormSection, FormField, Input, Button],
  templateUrl: './register-customer-form.html',
  styleUrl: './register-customer-form.css',
})
export class RegisterCustomerForm {}
