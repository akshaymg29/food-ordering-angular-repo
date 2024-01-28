import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, IUser, IUserData } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  currentUser: IUser | null = {
    email: '',
    name: '',
    roles: []
  };
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const requiredRole = route.data['requiredRole'];
    // this.authService.getCurrentUser().subscribe(
    //   (userData: IUserData) => {
    //     this.currentUser = userData.userData;
    //   }
    // );
    this.currentUser = this.authService.getCurrentUser();
    if (this.currentUser && this.currentUser.roles.includes(requiredRole)) {
      // User has the required role, allow access to the route
      return true;
    } else {
      // User does not have the required role, redirect to a forbidden page
      this.router.navigate(['/forbidden']);
      return false;
    }
  }

}
