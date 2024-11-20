import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
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

  constructor() {}

  login = (user: IUser): Observable<boolean> => {
    let value: boolean = false;
    user.username === this.USERNAME_KEY &&
      user.password === this.PASSWORD_KEY &&
      (value = true);

    return of(value).pipe(delay(2000));
  };

  isLogged = () => {
    return this.isLoggedIn;
  };

  logout = () => {
    this.isLoggedIn = false;
  };

  getUsername = () => this.USERNAME_KEY;
}
