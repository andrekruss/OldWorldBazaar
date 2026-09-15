import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input } from './input';

describe('Input', () => {
  let component: Input;
  let fixture: ComponentFixture<Input>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Input],
    }).compileComponents();

    fixture = TestBed.createComponent(Input);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the provided value', () => {
    fixture.componentRef.setInput('value', 'John');
    fixture.detectChanges();

    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    expect(input.value).toBe('John');
  });

  it('should update value when user types', () => {
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    input.value = 'John';
    input.dispatchEvent(new Event('input'));

    expect(component.value()).toBe('John');
  });

  it('should be disabled when disabled is true', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    expect(input.disabled).toBeTruthy();
  });

  it('should set the provided type', () => {
    fixture.componentRef.setInput('type', 'password');
    fixture.detectChanges();

    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    expect(input.type).toBe('password');
  });

  it('should set the provided placeholder', () => {
    fixture.componentRef.setInput('placeholder', 'Enter your email');
    fixture.detectChanges();

    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    expect(input.placeholder).toBe('Enter your email');
  });
});
