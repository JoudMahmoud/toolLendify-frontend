import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegister } from '../../_models/user-register';
import { UserAuthService } from '../../services/auth/user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
   userRegister: UserRegister = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    messageError: '',
    styleMessageError: false,
  };

  constructor(private authService: UserAuthService, private router: Router) {}

  Register() {
    this.authService.Register(
      this.userRegister.userName,
      this.userRegister.password,
      this.userRegister.confirmPassword,
      this.userRegister.email,
    ).subscribe({
      next: (response) => {
        console.log('Response is', response);
        alert(`Hi ${this.userRegister.userName}`);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.userRegister.styleMessageError = true;
        if (err.error?.error === 'Email already exists') {
          this.userRegister.messageError = 'Email is already being used.';
        } else if (err.error?.confirmPassword) {
          this.userRegister.messageError = err.error.confirmPassword;
        } else if (err.error?.password) {
          this.userRegister.messageError = err.error.password;
        } else {
          this.userRegister.messageError =
            'Registration failed. Please try again.';
        }
      },
      complete: () => {
        console.log(`Register process success`);
      }

    });
  }
}
