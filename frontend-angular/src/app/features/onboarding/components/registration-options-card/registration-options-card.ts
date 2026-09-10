import { Component } from '@angular/core';
import { AccountTypeCard, AccountTypeCardData } from "../account-type-card/account-type-card";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration-options-card',
  imports: [AccountTypeCard, RouterLink],
  templateUrl: './registration-options-card.html',
  styleUrl: './registration-options-card.css',
})
export class RegistrationOptionsCard {
  protected customerCardData: AccountTypeCardData = {
    title: 'Shop for Antiques',
    to: '/register/customer',
    icon: '🛒',
    description: 'Discover unique antiques from trusted sellers.'
  };

  protected sellerCardData: AccountTypeCardData = {
    title: 'Open a Store',
    to: '/register/seller',
    icon: '🏪',
    description: 'Start selling antiques and collectibles.'
  };
}
