import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RegisterSellerForm } from '../../components/register-seller-form/register-seller-form';

@Component({
  selector: 'app-register-seller-page',
  imports: [RegisterSellerForm],
  templateUrl: './register-seller-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './register-seller-page.css',
})
export class RegisterSellerPage {}
