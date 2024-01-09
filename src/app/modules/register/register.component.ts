import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../auth-services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) { }

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
    this.authService.createUser(this.registerForm.value).subscribe({
      next: (v) => {
        console.log(v) 
        // reroute to home
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  };

  getUsers() {
    this.authService.getUsers().subscribe(
      (resp) => {
        console.log(resp);
      }
    );
  };

  ngOnInit(): void {
  };
}
