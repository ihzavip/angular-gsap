import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private formBuilder: FormBuilder
  ) {}

  registerForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.min(7)]],
    lastName: [''],
    email: ['', Validators.email],
    password: ['', Validators.required],
    passwordConfirmation: ['', Validators.required]
  })

  register() {
    console.log('register');
    console.log(this.registerForm.value);
  }
}
