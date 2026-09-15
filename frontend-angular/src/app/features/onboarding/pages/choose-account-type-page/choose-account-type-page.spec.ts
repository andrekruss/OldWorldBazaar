import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, expect, it, beforeEach } from 'vitest';

import { ChooseAccountTypePage } from './choose-account-type-page';
import { provideRouter } from '@angular/router';

describe('ChooseAccountTypePage', () => {
  let component: ChooseAccountTypePage;
  let fixture: ComponentFixture<ChooseAccountTypePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseAccountTypePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseAccountTypePage);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the registration options card', () => {
    const card = fixture.nativeElement.querySelector(
      'app-registration-options-card'
    );

    expect(card).toBeTruthy();
  });
});
