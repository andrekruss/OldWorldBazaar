import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { describe, expect, it, beforeEach, vi } from 'vitest';

import { RegisterCustomerForm } from './register-customer-form';
import { CustomerService } from '../../../../api/services/customers/customer-service';
import { CustomerResponse } from '../../../../dtos/customers/responses/customer-response';

describe('RegisterCustomerForm', () => {
  let component: RegisterCustomerForm;
  let fixture: ComponentFixture<RegisterCustomerForm>;

  const customerServiceMock = {
    createCustomer: vi.fn(),
  };

  const mockCustomerResponse = {} as CustomerResponse;

  beforeEach(async () => {
    vi.clearAllMocks();

    customerServiceMock.createCustomer.mockReturnValue(
      of(mockCustomerResponse)
    );

    await TestBed.configureTestingModule({
      imports: [RegisterCustomerForm],
      providers: [
        {
          provide: CustomerService,
          useValue: customerServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterCustomerForm);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with an invalid form', () => {
    expect(component['form']().valid()).toBe(false);
  });

  it('should not submit an invalid form', async () => {
    const formElement: HTMLFormElement =
      fixture.nativeElement.querySelector('form');

    formElement.dispatchEvent(new Event('submit'));

    await fixture.whenStable();

    expect(customerServiceMock.createCustomer).not.toHaveBeenCalled();
  });

  it('should submit the customer data when the form is valid', async () => {
    component['model'].set({
      email: 'john@email.com',
      password: '12345678',
      confirmPassword: '12345678',

      firstName: 'John',
      lastName: 'Doe',
      phone: '11999999999',

      street: 'Rua Alberto Silva',
      district: 'Centro',
      number: '45',
      complement: 'Apto 10',
      reference: 'Perto da praça',
      zipCode: '12345-678',
      city: 'São Paulo',
      state: 'SP',
      country: 'Brazil',
    });

    fixture.detectChanges();

    const formElement: HTMLFormElement =
      fixture.nativeElement.querySelector('form');

    formElement.dispatchEvent(new Event('submit'));

    await fixture.whenStable();

    expect(customerServiceMock.createCustomer).toHaveBeenCalledTimes(1);

    expect(customerServiceMock.createCustomer).toHaveBeenCalledWith({
      email: 'john@email.com',
      plainPassword: '12345678',
      firstName: 'John',
      lastName: 'Doe',
      phone: '11999999999',
      address: {
        street: 'Rua Alberto Silva',
        district: 'Centro',
        number: '45',
        complement: 'Apto 10',
        reference: 'Perto da praça',
        zipCode: '12345-678',
        city: 'São Paulo',
        state: 'SP',
        country: 'Brazil',
      },
    });
  });

  it('should not submit when passwords do not match', async () => {
    component['model'].set({
      email: 'john@email.com',
      password: '12345678',
      confirmPassword: '87654321',

      firstName: 'John',
      lastName: 'Doe',
      phone: '',

      street: 'Rua Alberto Silva',
      district: 'Centro',
      number: '',
      complement: '',
      reference: '',
      zipCode: '12345-678',
      city: 'São Paulo',
      state: 'SP',
      country: 'Brazil',
    });

    fixture.detectChanges();

    const formElement: HTMLFormElement =
      fixture.nativeElement.querySelector('form');

    formElement.dispatchEvent(new Event('submit'));

    await fixture.whenStable();

    expect(customerServiceMock.createCustomer).not.toHaveBeenCalled();
  });
});
