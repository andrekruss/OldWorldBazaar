import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCustomerForm } from './register-customer-form';

describe('RegisterCustomerForm', () => {
  let component: RegisterCustomerForm;
  let fixture: ComponentFixture<RegisterCustomerForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterCustomerForm],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterCustomerForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
