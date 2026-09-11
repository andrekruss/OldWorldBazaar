import { Component, input } from '@angular/core';

@Component({
  selector: 'app-form-section',
  imports: [],
  templateUrl: './form-section.html',
  styleUrl: './form-section.css',
})
export class FormSection {
  public title = input.required<string>();
  public numberOfColumns = input<1 | 2>(1);
}
