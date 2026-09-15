import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { beforeEach, describe, expect, it } from 'vitest';

import { SellerService } from './seller-service';
import { CreateSellerRequest } from '../../../dtos/sellers/requests/create-seller-request';
import { SellerResponse } from '../../../dtos/sellers/responses/seller-response';
import { sellerEndpoints } from '../../endpoints/seller-endpoints';

describe('SellerService', () => {
  let service: SellerService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SellerService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(SellerService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a seller', () => {
    const request: CreateSellerRequest = {
      name: 'Old World Antiques',
      email: 'contact@oldworld.com',
      plainPassword: '12345678',
      about: 'A store specialized in antiques and collectibles.',
    };

    const response: SellerResponse = {
      id: 1,
      name: 'Old World Antiques',
      email: 'contact@oldworld.com',
      about: 'A store specialized in antiques and collectibles.',
      createdAt: '2026-09-14T10:00:00Z',
    };

    service.createSeller(request).subscribe(result => {
      expect(result).toEqual(response);
    });

    const httpRequest = httpTesting.expectOne(
      sellerEndpoints.register
    );

    expect(httpRequest.request.method).toBe('POST');
    expect(httpRequest.request.body).toEqual(request);

    httpRequest.flush(response);
  });
});
