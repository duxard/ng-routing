import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthorized = false;

  login(): void {
    this.isAuthorized = true;
  }

  logout(): void {
    this.isAuthorized = false;
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.isAuthorized), 1000);
    });
  }
}
