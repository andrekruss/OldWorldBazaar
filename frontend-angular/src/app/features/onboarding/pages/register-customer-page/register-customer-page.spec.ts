import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { RegisterCustomerPage } from './register-customer-page';

describe('RegisterCustomerPage', () => {
  let component: RegisterCustomerPage;
  let fixture: ComponentFixture<RegisterCustomerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterCustomerPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterCustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the register customer form', () => {
    const form = fixture.nativeElement.querySelector(
      'app-register-customer-form'
    );

    expect(form).toBeTruthy();
  });
});
