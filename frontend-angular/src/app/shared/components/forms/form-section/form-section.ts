import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-form-section',
  imports: [],
  templateUrl: './form-section.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './form-section.css',
})
export class FormSection {
  public title = input.required<string>();
  public numberOfColumns = input<1 | 2>(1);
}
