import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../auth-services/authentication.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
  ) { }

  loginForm = this.formBuilder.group({
    email: ['', [ Validators.required ,Validators.email ]],
    password: ['', Validators.required],
  })

  login() {
    console.log(this.loginForm);
    this.authService.login(this.loginForm.value).pipe(
      finalize(() => console.log("done"))
    ).subscribe({
      next: (v) => {
        console.log("response data", v)
        if (v.success) {
          localStorage.setItem("token", v.token);
          this.router.navigateByUrl("/")
        }
      },
      error: (e) => console.log(e),
      complete: () => console.log("complete")
    });
  }

}
