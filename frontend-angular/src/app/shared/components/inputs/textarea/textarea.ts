import { Component, input, ChangeDetectionStrategy, model } from '@angular/core';

@Component({
  selector: 'app-textarea',
  imports: [],
  templateUrl: './textarea.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './textarea.css',
})
export class Textarea {
  value = model('');
  placeholder = input<string>('');
  disabled = input<boolean>(false);
  rows = input<number>(4);
}
