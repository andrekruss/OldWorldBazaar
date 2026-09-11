import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
