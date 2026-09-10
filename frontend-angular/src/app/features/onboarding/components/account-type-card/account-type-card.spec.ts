import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTypeCard } from './account-type-card';

describe('AccountTypeCard', () => {
  let component: AccountTypeCard;
  let fixture: ComponentFixture<AccountTypeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountTypeCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountTypeCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
