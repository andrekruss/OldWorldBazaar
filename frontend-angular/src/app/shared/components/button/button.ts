import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './button.css',
})
export class Button {
  public text = input.required<string>();
  public type = input<'button' | 'submit' | 'reset'>('button');
  public disabled = input<boolean>(false);
}
