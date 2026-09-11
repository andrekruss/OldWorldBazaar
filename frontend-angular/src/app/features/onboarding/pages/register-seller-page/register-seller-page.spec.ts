import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
