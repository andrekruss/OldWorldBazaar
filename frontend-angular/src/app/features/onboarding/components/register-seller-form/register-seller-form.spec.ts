import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSellerForm } from './register-seller-form';

describe('RegisterSellerForm', () => {
  let component: RegisterSellerForm;
  let fixture: ComponentFixture<RegisterSellerForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterSellerForm],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterSellerForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
