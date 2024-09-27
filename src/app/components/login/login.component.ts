import { Component } from '@angular/core';
import { UserLogin } from '../../_models/user-login';
import { Router } from '@angular/router';
import { UserAuthService } from '../../services/auth/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userLogin: UserLogin;


  // green-color:

  constructor(private authservice:UserAuthService, private router:Router) {
    this.userLogin = {
      email: '',
      password: '',
      rememberMe: false,
      messageError: 'Email or password is incorrect',
      styleMessageError:false
    };

  }

  Login() {
    this.authservice.Login(this.userLogin.email, this.userLogin.password,this.userLogin.rememberMe).subscribe({
      next: (respone) => {
        alert(`Hi ${this.userLogin.email}`);
        this.router.navigate(['/home']);
      }, error: (err) => {
        this.userLogin.styleMessageError = true;
      }, complete: () => {
        console.log('Login process success');
      }
    });
  }
  // import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
  // import { Observable } from 'rxjs';
  // import { tap } from 'rxjs/operators';

  // @Injectable()
  // export class LogInterceptor implements HttpInterceptor {
  //   constructor() {}

  //   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //     const started = Date.now();
  //     return next.handle(req).pipe(
  //       tap(event => {
  //         if (event instanceof HttpResponse) {
  //           const elapsed = Date.now() - started;
  //           console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
  //         }
  //       })
  //     );
  //   }
  // }
}
