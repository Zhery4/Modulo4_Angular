import { Injectable } from '@angular/core';
import { Observable, of, delay, tap } from 'rxjs';
export interface IUser {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;
  private readonly USERNAME_KEY = 'master@lemoncode.net';
  private readonly PASSWORD_KEY = '12345678';
  private readonly TOKEN_KEY = 'isLoggedIn';

  constructor() {}

  login = (user: IUser): Observable<boolean> => {
    let value = false;
    user.username === this.USERNAME_KEY &&
      user.password === this.PASSWORD_KEY &&
      (value = true);

    return of(value).pipe(
      delay(2000),
      tap((isAuthenticated: boolean) => {
        localStorage.setItem(this.TOKEN_KEY, isAuthenticated.toString());
        this.isLoggedIn = isAuthenticated;
      })
    );
  };

  isLogged = () => {
    localStorage.getItem(this.TOKEN_KEY) === 'true' && (this.isLoggedIn = true);
    return this.isLoggedIn;
  };

  logout = () => {
    localStorage.removeItem(this.TOKEN_KEY);
    this.isLoggedIn = false;
  };

  getUsername = () => this.USERNAME_KEY;
}
