import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}