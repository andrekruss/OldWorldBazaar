import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { beforeEach, describe, expect, it } from 'vitest';

import { CustomerService } from './customer-service';
import { CreateCustomerRequest } from '../../../dtos/customers/requests/create-customer-request';
import { CustomerResponse } from '../../../dtos/customers/responses/customer-response';
import { customerEndpoints } from '../../endpoints/customer-endpoints';

describe('CustomerService', () => {
  let service: CustomerService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CustomerService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(CustomerService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a customer', () => {
    const request: CreateCustomerRequest = {
      email: 'john@email.com',
      plainPassword: '12345678',
      firstName: 'John',
      lastName: 'Doe',
      phone: '11999999999',
      address: {
        street: 'Main Street',
        district: 'Downtown',
        number: '123',
        complement: '',
        reference: '',
        zipCode: '12345-678',
        city: 'São Paulo',
        state: 'SP',
        country: 'Brazil',
      },
    };

    const response: CustomerResponse = {
      id: 1,
      email: 'john@email.com',
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '11999999999',
      address: {
        street: 'Main Street',
        district: 'Downtown',
        number: '123',
        complement: '',
        reference: '',
        zipCode: '12345-678',
        city: 'São Paulo',
        state: 'SP',
        country: 'Brazil',
      },
      createdAt: '2026-09-14T10:00:00Z',
    };

    service.createCustomer(request).subscribe(result => {
      expect(result).toEqual(response);
    });

    const httpRequest = httpTesting.expectOne(
      customerEndpoints.register
    );

    expect(httpRequest.request.method).toBe('POST');
    expect(httpRequest.request.body).toEqual(request);

    httpRequest.flush(response);
  });
});
