import { Injectable } from '@angular/core';
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

  login = (user: IUser): boolean => {
    user.username === this.USERNAME_KEY &&
      user.password === this.PASSWORD_KEY &&
      (this.isLoggedIn = true);
    return this.isLoggedIn;
  };

  isLogged = () => this.isLoggedIn;

  logout = () => {
    this.isLoggedIn = false;
  };

  getUsername = () => this.USERNAME_KEY;
}
