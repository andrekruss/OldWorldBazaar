import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RegistrationOptionsCard } from '../../components/registration-options-card/registration-options-card';

@Component({
  selector: 'app-choose-account-type-page',
  imports: [RegistrationOptionsCard],
  templateUrl: './choose-account-type-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './choose-account-type-page.css',
})
export class ChooseAccountTypePage {}
