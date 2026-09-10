import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

export interface AccountTypeCardData {
  title: string;
  to: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-account-type-card',
  imports: [RouterLink],
  templateUrl: './account-type-card.html',
  styleUrl: './account-type-card.css',
})
export class AccountTypeCard {
  public cardData = input.required<AccountTypeCardData>();
}
