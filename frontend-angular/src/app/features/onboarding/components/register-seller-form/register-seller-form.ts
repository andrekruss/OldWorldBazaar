import { Component } from '@angular/core';
import { FormSection } from "../../../../shared/components/forms/form-section/form-section";
import { FormField } from "../../../../shared/components/forms/form-field/form-field";
import { Input } from "../../../../shared/components/inputs/input/input";
import { Button } from "../../../../shared/components/button/button";
import { Textarea } from "../../../../shared/components/inputs/textarea/textarea";

@Component({
  selector: 'app-register-seller-form',
  imports: [FormSection, FormField, Input, Button, Textarea],
  templateUrl: './register-seller-form.html',
  styleUrl: './register-seller-form.css',
})
export class RegisterSellerForm {}
