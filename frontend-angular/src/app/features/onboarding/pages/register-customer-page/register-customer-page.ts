import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RegisterCustomerForm } from '../../components/register-customer-form/register-customer-form';

@Component({
  selector: 'app-register-customer-page',
  imports: [RegisterCustomerForm],
  templateUrl: './register-customer-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './register-customer-page.css',
})
export class RegisterCustomerPage {}
