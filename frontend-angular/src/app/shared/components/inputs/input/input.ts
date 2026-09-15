import { Component, input, ChangeDetectionStrategy, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './input.css',
})
export class Input implements FormValueControl<string> {
  value = model('');
  type = input('text');
  placeholder = input('');
  disabled = input(false);
}
