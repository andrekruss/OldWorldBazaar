import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { form, FieldTree } from '@angular/forms/signals';

import { FormField } from './form-field';

describe('FormField', () => {
  let component: FormField;
  let fixture: ComponentFixture<FormField>;
  let testForm: FieldTree<{ name: string }>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormField],
    }).compileComponents();

    const model = signal({ name: '' });

    testForm = TestBed.runInInjectionContext(() => form(model));

    fixture = TestBed.createComponent(FormField);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('label', 'Name');
    fixture.componentRef.setInput('field', testForm.name);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the provided label', () => {
    const label: HTMLLabelElement =
      fixture.nativeElement.querySelector('label');

    expect(label.textContent?.trim()).toBe('Name');
  });

  it('should display required indicator when required is true', () => {
    fixture.componentRef.setInput('required', true);
    fixture.detectChanges();

    const label: HTMLLabelElement =
      fixture.nativeElement.querySelector('label');

    expect(label.textContent).toContain('*');
  });

  it('should not display required indicator when required is false', () => {
    const label: HTMLLabelElement =
      fixture.nativeElement.querySelector('label');

    expect(label.textContent).not.toContain('*');
  });
});
