import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSection } from './form-section';

describe('FormSection', () => {
  let component: FormSection;
  let fixture: ComponentFixture<FormSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSection],
    }).compileComponents();

    fixture = TestBed.createComponent(FormSection);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('title', 'Account Information');
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should display the provided title', () => {
    fixture.componentRef.setInput('title', 'Account Information');
    fixture.detectChanges();

    const title: HTMLHeadingElement =
      fixture.nativeElement.querySelector('h2');

    expect(title.textContent?.trim()).toBe('Account Information');
  });

  it('should use one column by default', () => {
    fixture.componentRef.setInput('title', 'Account Information');
    fixture.detectChanges();

    expect(component.numberOfColumns()).toBe(1);
  });

  it('should apply two column layout when numberOfColumns is 2', () => {
    fixture.componentRef.setInput('title', 'Address');
    fixture.componentRef.setInput('numberOfColumns', 2);
    fixture.detectChanges();

    const grid: HTMLDivElement =
      fixture.nativeElement.querySelector('div.grid');

    expect(grid.classList.contains('md:grid-cols-2')).toBeTruthy();
  });

  it('should not apply two column layout when numberOfColumns is 1', () => {
    fixture.componentRef.setInput('title', 'Personal Information');
    fixture.componentRef.setInput('numberOfColumns', 1);
    fixture.detectChanges();

    const grid: HTMLDivElement =
      fixture.nativeElement.querySelector('div.grid');

    expect(grid.classList.contains('md:grid-cols-2')).toBeFalsy();
  });
});
