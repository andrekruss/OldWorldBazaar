import { CreateCustomerRequest } from './../../../../dtos/customers/requests/create-customer-request';
import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { FormSection } from '../../../../shared/components/forms/form-section/form-section';
import { FormField } from '../../../../shared/components/forms/form-field/form-field';
import { Input } from '../../../../shared/components/inputs/input/input';
import { Button } from '../../../../shared/components/button/button';
import { email, form, minLength, required, FormField as NgFormField, FormRoot, validate } from '@angular/forms/signals';
import { firstValueFrom } from 'rxjs';
import { CustomerService } from '../../../../api/services/customers/customer-service';

interface RegisterCustomerModel {
  email: string;
  password: string;
  confirmPassword: string;

  firstName: string;
  lastName: string;
  phone: string;

  street: string;
  district: string;
  number: string;
  complement: string;
  reference: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;
}

@Component({
  selector: 'app-register-customer-form',
  imports: [FormSection, FormField, Input, Button, NgFormField, FormRoot],
  templateUrl: './register-customer-form.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './register-customer-form.css',
})
export class RegisterCustomerForm {

  private customerService = inject(CustomerService);

  protected model = signal<RegisterCustomerModel>({
    email: '',
    password: '',
    confirmPassword: '',

    firstName: '',
    lastName: '',
    phone: '',

    street: '',
    district: '',
    number: '',
    complement: '',
    reference: '',
    zipCode: '',
    city: '',
    state: '',
    country: '',
  });

  protected form = form(this.model, (path) => {
    required(path.email, {
      message: 'Email is required'
    });
    email(path.email, {
      message: 'Please enter a valid email address'
    });

    required(path.password, {
      message: 'Password is required'
    });
    minLength(path.password, 8, {
      message: 'Password must be at least 8 characters long'
    });

    required(path.confirmPassword, {
      message: 'Please confirm your password'
    });
    validate(path.confirmPassword, ({ value, valueOf }) => {
      if (!value()) {
        return null;
      }

      if (value() !== valueOf(path.password)) {
        return {
          kind: 'passwordMismatch',
          message: 'Passwords do not match.',
        };
      }

      return null;
    });

    required(path.firstName, {
      message: 'First name is required'
    });
    required(path.lastName, {
      message: 'Last name is required'
    });

    required(path.street, {
      message: 'Street is required'
    });
    required(path.district, {
      message: 'District is required'
    });

    required(path.zipCode, {
      message: 'Zip Code is required'
    });
    required(path.city, {
      message: 'City is required'
    });
    required(path.state, {
      message: 'State is required'
    });
    required(path.country, {
      message: 'Country is required'
    });
  },
  {
    submission: {
      action: async (field) => {
        const data = field().value()

        const createCustomerRequest: CreateCustomerRequest = {
          email: data.email,
          plainPassword: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          address: {
            street: data.street,
            district: data.district,
            number: data.number,
            complement: data.complement,
            reference: data.reference,
            zipCode: data.zipCode,
            city: data.city,
            state: data.state,
            country: data.country
          }
        };

        const customer = await firstValueFrom(
          this.customerService.createCustomer(createCustomerRequest)
        );

        console.log(customer);
      }
    }
  }
  );
}
