import { Component, input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  imports: [],
  templateUrl: './textarea.html',
  styleUrl: './textarea.css',
})
export class Textarea {
  placeholder = input<string>('');
  disabled = input<boolean>(false);
  rows = input<number>(4);
}
