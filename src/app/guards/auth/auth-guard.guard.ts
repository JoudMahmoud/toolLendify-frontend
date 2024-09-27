import { CanActivate, Router } from '@angular/router';
import { UserAuthService } from '../../serivces/auth/user-auth.service';


class AuthGuard implements CanActivate {
  constructor(private authService: UserAuthService, private router: Router) {}
  canActivate() {
    if (this.authService.isUserLogged) {
      return true;
    } else {
      alert(`You must login first...`);
      this.router.navigate(['login']);
      return false;
    }
  }
}
