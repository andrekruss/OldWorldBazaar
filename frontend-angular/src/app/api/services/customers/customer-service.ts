import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { CreateCustomerRequest } from '../../../dtos/customers/requests/create-customer-request';
import { customerEndpoints } from '../../endpoints/customer-endpoints';
import { CustomerResponse } from '../../../dtos/customers/responses/customer-response';
import { Observable } from 'rxjs';

@Service()
export class CustomerService {
  private http = inject(HttpClient);

  public createCustomer(request: CreateCustomerRequest) : Observable<CustomerResponse> {
    return this.http.post<CustomerResponse>( customerEndpoints.register, request);
  }
}
