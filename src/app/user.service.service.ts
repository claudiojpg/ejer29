import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private email: string | null = null;

  constructor() {}

  setEmail(email: string) {
    this.email = email;
  }

  getEmail() {
    return this.email;
  }
}