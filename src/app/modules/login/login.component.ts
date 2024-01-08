import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private formBuilder: FormBuilder
  ) {}

  loginForm = this.formBuilder.group({
    firstName: ['', [ Validators.required, Validators.min(7) ]],
    lastName: [''],
    email: ['', Validators.email],
    password: ['', Validators.required],
    passwordConfirmation: ['', Validators.required]
  })

  register() {
    console.log(this.loginForm.value);
  }

}
