import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAccountTypePage } from './choose-account-type-page';

describe('ChooseAccountTypePage', () => {
  let component: ChooseAccountTypePage;
  let fixture: ComponentFixture<ChooseAccountTypePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseAccountTypePage],
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseAccountTypePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
