import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';

import {
  AccountTypeCard,
  AccountTypeCardData,
} from './account-type-card';

describe('AccountTypeCard', () => {
  let component: AccountTypeCard;
  let fixture: ComponentFixture<AccountTypeCard>;

  const cardData: AccountTypeCardData = {
    title: 'Customer',
    to: '/register/customer',
    icon: '🛒',
    description: 'Create an account to buy products.',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountTypeCard],
      providers: [
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountTypeCard);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('cardData', cardData);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the card title', () => {
    const title: HTMLHeadingElement =
      fixture.nativeElement.querySelector('h2');

    expect(title.textContent?.trim()).toBe('Customer');
  });

  it('should display the card icon', () => {
    const icon: HTMLDivElement =
      fixture.nativeElement.querySelector('div.text-4xl');

    expect(icon.textContent?.trim()).toBe('🛒');
  });

  it('should display the card description', () => {
    const description: HTMLParagraphElement =
      fixture.nativeElement.querySelector('p');

    expect(description.textContent?.trim()).toBe(
      'Create an account to buy products.'
    );
  });

  it('should have the correct router link', () => {
    const link: HTMLAnchorElement =
      fixture.nativeElement.querySelector('a');

    expect(link.getAttribute('href')).toBe('/register/customer');
  });
});
