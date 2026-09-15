import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textarea } from './textarea';

describe('Textarea', () => {
  let component: Textarea;
  let fixture: ComponentFixture<Textarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Textarea],
    }).compileComponents();

    fixture = TestBed.createComponent(Textarea);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the provided placeholder', () => {
    fixture.componentRef.setInput('placeholder', 'Enter your description');
    fixture.detectChanges();

    const textarea: HTMLTextAreaElement =
      fixture.nativeElement.querySelector('textarea');

    expect(textarea.placeholder).toBe('Enter your description');
  });

  it('should be disabled when disabled is true', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const textarea: HTMLTextAreaElement =
      fixture.nativeElement.querySelector('textarea');

    expect(textarea.disabled).toBeTruthy();
  });

  it('should set the provided number of rows', () => {
    fixture.componentRef.setInput('rows', 8);
    fixture.detectChanges();

    const textarea: HTMLTextAreaElement =
      fixture.nativeElement.querySelector('textarea');

    expect(textarea.rows).toBe(8);
  });
});
