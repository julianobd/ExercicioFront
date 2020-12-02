import { TokenService } from './../core/services/token.service';
import { Observable } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  showHeader = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private token: TokenService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {
    if (!sessionStorage.getItem('user')) {
      this.router.navigate(['/login']);
      this.showHeader.emit(false);
      return false;
    }

    this.showHeader.emit(true);
    return true;
  }

  logout() {
    return this.showHeader.emit(false);
  }

}
