import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { RegisterSellerForm } from './register-seller-form';
import { SellerService } from '../../../../api/services/sellers/seller-service';
import { SellerResponse } from '../../../../dtos/sellers/responses/seller-response';

describe('RegisterSellerForm', () => {
  let component: RegisterSellerForm;
  let fixture: ComponentFixture<RegisterSellerForm>;

  const sellerServiceMock = {
    createSeller: vi.fn(),
  };

  const mockSellerResponse = {} as SellerResponse;

  beforeEach(async () => {
    vi.clearAllMocks();

    sellerServiceMock.createSeller.mockReturnValue(
      of(mockSellerResponse)
    );

    await TestBed.configureTestingModule({
      imports: [RegisterSellerForm],
      providers: [
        {
          provide: SellerService,
          useValue: sellerServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterSellerForm);
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

    expect(sellerServiceMock.createSeller).not.toHaveBeenCalled();
  });

  it('should submit the seller data when the form is valid', async () => {
    component['model'].set({
      name: 'Old World Antiques',
      email: 'contact@oldworld.com',
      password: '12345678',
      confirmPassword: '12345678',
      about: 'A store specialized in antiques and collectibles.',
    });

    fixture.detectChanges();

    const formElement: HTMLFormElement =
      fixture.nativeElement.querySelector('form');

    formElement.dispatchEvent(new Event('submit'));

    await fixture.whenStable();

    expect(sellerServiceMock.createSeller).toHaveBeenCalledTimes(1);

    expect(sellerServiceMock.createSeller).toHaveBeenCalledWith({
      name: 'Old World Antiques',
      email: 'contact@oldworld.com',
      plainPassword: '12345678',
      about: 'A store specialized in antiques and collectibles.',
    });
  });

  it('should not submit when passwords do not match', async () => {
    component['model'].set({
      name: 'Old World Antiques',
      email: 'contact@oldworld.com',
      password: '12345678',
      confirmPassword: '87654321',
      about: 'A store specialized in antiques and collectibles.',
    });

    fixture.detectChanges();

    const formElement: HTMLFormElement =
      fixture.nativeElement.querySelector('form');

    formElement.dispatchEvent(new Event('submit'));

    await fixture.whenStable();

    expect(sellerServiceMock.createSeller).not.toHaveBeenCalled();
  });

  it('should not submit when the password is too short', async () => {
    component['model'].set({
      name: 'Old World Antiques',
      email: 'contact@oldworld.com',
      password: '1234567',
      confirmPassword: '1234567',
      about: 'A store specialized in antiques and collectibles.',
    });

    fixture.detectChanges();

    const formElement: HTMLFormElement =
      fixture.nativeElement.querySelector('form');

    formElement.dispatchEvent(new Event('submit'));

    await fixture.whenStable();

    expect(sellerServiceMock.createSeller).not.toHaveBeenCalled();
  });
});
