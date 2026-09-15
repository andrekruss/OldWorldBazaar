import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationOptionsCard } from './registration-options-card';
import { provideRouter } from '@angular/router';

describe('RegistrationOptionsCard', () => {
  let component: RegistrationOptionsCard;
  let fixture: ComponentFixture<RegistrationOptionsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationOptionsCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationOptionsCard);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const title: HTMLHeadingElement =
      fixture.nativeElement.querySelector('h1');

    expect(title.textContent?.trim()).toBe('Join Old World Bazaar');
  });

  it('should display the description', () => {
    const description: HTMLParagraphElement =
      fixture.nativeElement.querySelector('p');

    expect(description.textContent?.trim()).toBe(
      "Choose how you'd like to begin your journey."
    );
  });

  it('should render two account type cards', () => {
    const cards =
      fixture.nativeElement.querySelectorAll('app-account-type-card');

    expect(cards.length).toBe(2);
  });

  it('should display the customer registration option', () => {
    const cards =
      fixture.nativeElement.querySelectorAll('app-account-type-card');

    const customerCard = cards[0];

    expect(customerCard.textContent).toContain('Shop for Antiques');
    expect(customerCard.textContent).toContain(
      'Discover unique antiques from trusted sellers.'
    );
  });

  it('should display the seller registration option', () => {
    const cards =
      fixture.nativeElement.querySelectorAll('app-account-type-card');

    const sellerCard = cards[1];

    expect(sellerCard.textContent).toContain('Open a Store');
    expect(sellerCard.textContent).toContain(
      'Start selling antiques and collectibles.'
    );
  });

  it('should have a link to the login page', () => {
    const links: NodeListOf<HTMLAnchorElement> =
      fixture.nativeElement.querySelectorAll('a');

    const loginLink = Array.from(links).find(
      link => link.textContent?.trim() === 'Sign in'
    );

    expect(loginLink).toBeTruthy();
    expect(loginLink?.getAttribute('href')).toBe('/login');
  });
});
