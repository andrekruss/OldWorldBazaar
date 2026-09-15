import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { RegisterSellerPage } from './register-seller-page';

describe('RegisterSellerPage', () => {
  let component: RegisterSellerPage;
  let fixture: ComponentFixture<RegisterSellerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterSellerPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterSellerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the register seller form', () => {
    const form = fixture.nativeElement.querySelector(
      'app-register-seller-form'
    );

    expect(form).toBeTruthy();
  });
});
