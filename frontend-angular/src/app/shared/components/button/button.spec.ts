import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button } from './button';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button],
    }).compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('text', 'Register');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the required text', () => {
    fixture.componentRef.setInput('text', 'Register');
    fixture.detectChanges();

    const button : HTMLButtonElement =
      fixture.nativeElement.querySelector('button');

    expect(button.textContent?.trim()).toBe('Register');
  });

  it('should have button type by default', () => {
    fixture.componentRef.setInput('text', 'Register');
    fixture.detectChanges();

    const button : HTMLButtonElement =
      fixture.nativeElement.querySelector('button');

    expect(button.type).toBe('button');
  });

  it('should set the provided button type', () => {
    fixture.componentRef.setInput('text', 'Register');
    fixture.componentRef.setInput('type', 'submit');
    fixture.detectChanges();

    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');

    expect(button.type).toBe('submit');
  });

  it('should be enabled by default', () => {
    fixture.componentRef.setInput('text', 'Register');
    fixture.detectChanges();

    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');

    expect(button.disabled).toBeFalsy();
  });

  it('should be enabled when disabled is false', () => {
    fixture.componentRef.setInput('text', 'Register');
    fixture.componentRef.setInput('disabled', false);
    fixture.detectChanges();

    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');

    expect(button.disabled).toBeFalsy();
  });
});
