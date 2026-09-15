import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { sellerEndpoints } from '../../endpoints/seller-endpoints';
import { CreateSellerRequest } from '../../../dtos/sellers/requests/create-seller-request';
import { SellerResponse } from '../../../dtos/sellers/responses/seller-response';

@Service()
export class SellerService {
  private httpClient = inject(HttpClient);

  public createSeller(request: CreateSellerRequest) {
    return this.httpClient.post<SellerResponse>( sellerEndpoints.register, request);
  }
}
