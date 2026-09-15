import { email, form, FormRoot, minLength, required, validate, FormField as formField } from '@angular/forms/signals';
import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { FormSection } from '../../../../shared/components/forms/form-section/form-section';
import { FormField } from '../../../../shared/components/forms/form-field/form-field';
import { Input } from '../../../../shared/components/inputs/input/input';
import { Button } from '../../../../shared/components/button/button';
import { Textarea } from '../../../../shared/components/inputs/textarea/textarea';
import { SellerService } from '../../../../api/services/sellers/seller-service';
import { CreateSellerRequest } from '../../../../dtos/sellers/requests/create-seller-request';
import { firstValueFrom } from 'rxjs';

interface RegisterSellerModel {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  about: string;
}

@Component({
  selector: 'app-register-seller-form',
  imports: [FormSection, FormField, FormRoot, Input, Button, Textarea, formField],
  templateUrl: './register-seller-form.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './register-seller-form.css',
})
export class RegisterSellerForm {

  private sellerService = inject(SellerService);

  protected model = signal<RegisterSellerModel>(
    {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      about: ''
    }
  );

  protected form = form(this.model, (path) => {

    required(path.name, {
      message: 'Name is required'
    });

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
  },
  {
    submission: {
      action: async (field) => {
        const data = field().value();
        console.log(data);
        const createSellerRequest : CreateSellerRequest = {
          email: data.email,
          name: data.name,
          plainPassword: data.password,
          about: data.about
        };

        const seller = await firstValueFrom(
          this.sellerService.createSeller(createSellerRequest)
        );

        console.log(seller);
      }
    }
  }
  );
}
