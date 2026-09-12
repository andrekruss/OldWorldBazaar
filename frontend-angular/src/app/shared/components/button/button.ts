import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  public text = input.required<string>();
  public type = input<'button' | 'submit' | 'reset'>('button');
}
