import { Component, input, ChangeDetectionStrategy, computed } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';

@Component({
  selector: 'app-form-field',
  imports: [],
  templateUrl: './form-field.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './form-field.css',
})
export class FormField {
  label = input.required<string>();
  required = input(false);
  field = input.required<FieldTree<unknown>>();
  protected fieldState = computed(() => this.field()());
}
