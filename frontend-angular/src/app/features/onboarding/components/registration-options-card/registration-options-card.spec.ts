import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationOptionsCard } from './registration-options-card';

describe('RegistrationOptionsCard', () => {
  let component: RegistrationOptionsCard;
  let fixture: ComponentFixture<RegistrationOptionsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationOptionsCard],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationOptionsCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
